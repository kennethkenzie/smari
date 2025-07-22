#!/usr/bin/env python3
"""
Backend Testing Suite for Smari Creatives Website Application
Tests FastAPI server functionality, MongoDB connection, CORS, and API endpoints
"""

import requests
import json
import os
import sys
from datetime import datetime
from dotenv import load_dotenv
from pathlib import Path

# Load environment variables
load_dotenv('/app/frontend/.env')
BACKEND_URL = os.getenv('REACT_APP_BACKEND_URL')

class BackendTester:
    def __init__(self):
        self.backend_url = BACKEND_URL
        self.api_base = f"{self.backend_url}/api"
        self.test_results = []
        
    def log_test(self, test_name, success, message, details=None):
        """Log test results"""
        result = {
            'test': test_name,
            'success': success,
            'message': message,
            'details': details,
            'timestamp': datetime.now().isoformat()
        }
        self.test_results.append(result)
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} - {test_name}: {message}")
        if details:
            print(f"    Details: {details}")
    
    def test_server_health(self):
        """Test basic server health endpoints"""
        print("\n=== Testing Server Health ===")
        
        # Test root endpoint
        try:
            response = requests.get(f"{self.api_base}/", timeout=10)
            if response.status_code == 200:
                data = response.json()
                if data.get('message') == 'Hello World':
                    self.log_test("Root Endpoint", True, "Root endpoint returns correct response", 
                                f"Status: {response.status_code}, Response: {data}")
                else:
                    self.log_test("Root Endpoint", False, "Root endpoint returns unexpected response", 
                                f"Expected: {{'message': 'Hello World'}}, Got: {data}")
            else:
                self.log_test("Root Endpoint", False, f"Root endpoint returned status {response.status_code}", 
                            f"Response: {response.text}")
        except requests.exceptions.RequestException as e:
            self.log_test("Root Endpoint", False, "Failed to connect to root endpoint", str(e))
    
    def test_api_response_format(self):
        """Test API response format and status codes"""
        print("\n=== Testing API Response Format ===")
        
        try:
            response = requests.get(f"{self.api_base}/", timeout=10)
            
            # Check if response is JSON
            try:
                data = response.json()
                self.log_test("JSON Response Format", True, "API returns valid JSON", 
                            f"Content-Type: {response.headers.get('content-type')}")
            except json.JSONDecodeError:
                self.log_test("JSON Response Format", False, "API does not return valid JSON", 
                            f"Response: {response.text}")
            
            # Check status code
            if response.status_code == 200:
                self.log_test("HTTP Status Code", True, "API returns correct status code 200")
            else:
                self.log_test("HTTP Status Code", False, f"API returns status code {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_test("API Response Format", False, "Failed to test API response format", str(e))
    
    def test_cors_configuration(self):
        """Test CORS configuration"""
        print("\n=== Testing CORS Configuration ===")
        
        try:
            # Test preflight request
            headers = {
                'Origin': 'http://localhost:3000',
                'Access-Control-Request-Method': 'GET',
                'Access-Control-Request-Headers': 'Content-Type'
            }
            
            response = requests.options(f"{self.api_base}/", headers=headers, timeout=10)
            
            cors_headers = {
                'Access-Control-Allow-Origin': response.headers.get('access-control-allow-origin'),
                'Access-Control-Allow-Methods': response.headers.get('access-control-allow-methods'),
                'Access-Control-Allow-Headers': response.headers.get('access-control-allow-headers'),
                'Access-Control-Allow-Credentials': response.headers.get('access-control-allow-credentials')
            }
            
            if cors_headers['Access-Control-Allow-Origin'] == '*':
                self.log_test("CORS Allow Origin", True, "CORS allows all origins", 
                            f"Allow-Origin: {cors_headers['Access-Control-Allow-Origin']}")
            else:
                self.log_test("CORS Allow Origin", False, "CORS configuration issue", 
                            f"Headers: {cors_headers}")
                
        except requests.exceptions.RequestException as e:
            self.log_test("CORS Configuration", False, "Failed to test CORS", str(e))
    
    def test_mongodb_connection(self):
        """Test MongoDB connection through API endpoints"""
        print("\n=== Testing MongoDB Connection ===")
        
        # Test GET status endpoint (should work even with empty database)
        try:
            response = requests.get(f"{self.api_base}/status", timeout=10)
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("MongoDB Read Connection", True, "Successfully connected to MongoDB for read operations", 
                                f"Status checks count: {len(data)}")
                else:
                    self.log_test("MongoDB Read Connection", False, "Unexpected response format from status endpoint", 
                                f"Response: {data}")
            else:
                self.log_test("MongoDB Read Connection", False, f"Status endpoint returned {response.status_code}", 
                            f"Response: {response.text}")
        except requests.exceptions.RequestException as e:
            self.log_test("MongoDB Read Connection", False, "Failed to test MongoDB read connection", str(e))
        
        # Test POST status endpoint (write operation)
        try:
            test_data = {
                "client_name": f"test_client_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
            }
            
            response = requests.post(f"{self.api_base}/status", 
                                   json=test_data, 
                                   headers={'Content-Type': 'application/json'}, 
                                   timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if 'id' in data and 'client_name' in data and 'timestamp' in data:
                    self.log_test("MongoDB Write Connection", True, "Successfully connected to MongoDB for write operations", 
                                f"Created status check with ID: {data.get('id')}")
                else:
                    self.log_test("MongoDB Write Connection", False, "Unexpected response format from POST status", 
                                f"Response: {data}")
            else:
                self.log_test("MongoDB Write Connection", False, f"POST status endpoint returned {response.status_code}", 
                            f"Response: {response.text}")
                
        except requests.exceptions.RequestException as e:
            self.log_test("MongoDB Write Connection", False, "Failed to test MongoDB write connection", str(e))
    
    def test_environment_variables(self):
        """Test environment variable configuration"""
        print("\n=== Testing Environment Variables ===")
        
        # Check if REACT_APP_BACKEND_URL is properly configured
        if self.backend_url:
            self.log_test("Backend URL Configuration", True, "REACT_APP_BACKEND_URL is configured", 
                        f"URL: {self.backend_url}")
        else:
            self.log_test("Backend URL Configuration", False, "REACT_APP_BACKEND_URL not found in environment")
        
        # Test if backend is accessible via the configured URL
        try:
            response = requests.get(f"{self.api_base}/", timeout=10)
            if response.status_code == 200:
                self.log_test("Environment URL Access", True, "Backend accessible via configured URL")
            else:
                self.log_test("Environment URL Access", False, f"Backend not accessible, status: {response.status_code}")
        except requests.exceptions.RequestException as e:
            self.log_test("Environment URL Access", False, "Failed to access backend via configured URL", str(e))
    
    def test_port_binding(self):
        """Test port binding and API prefix configuration"""
        print("\n=== Testing Port Binding and API Prefix ===")
        
        # Test that API routes are properly prefixed with /api
        try:
            # Test that root without /api prefix should not work (or return different response)
            try:
                response = requests.get(f"{self.backend_url}/", timeout=5)
                # If this succeeds, it means there's a route without /api prefix
                self.log_test("API Prefix Isolation", False, "Root endpoint accessible without /api prefix", 
                            f"Status: {response.status_code}")
            except requests.exceptions.RequestException:
                # This is expected - root without /api should not be accessible
                self.log_test("API Prefix Isolation", True, "Root endpoint properly isolated to /api prefix")
            
            # Test that /api prefix works
            response = requests.get(f"{self.api_base}/", timeout=10)
            if response.status_code == 200:
                self.log_test("API Prefix Configuration", True, "API endpoints properly configured with /api prefix")
            else:
                self.log_test("API Prefix Configuration", False, f"API prefix not working, status: {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_test("Port Binding Test", False, "Failed to test port binding", str(e))
    
    def test_api_endpoints_comprehensive(self):
        """Comprehensive test of all API endpoints"""
        print("\n=== Testing All API Endpoints ===")
        
        endpoints_to_test = [
            ("GET", "/", "Root endpoint"),
            ("GET", "/status", "Get status checks"),
            ("POST", "/status", "Create status check")
        ]
        
        for method, endpoint, description in endpoints_to_test:
            try:
                url = f"{self.api_base}{endpoint}"
                
                if method == "GET":
                    response = requests.get(url, timeout=10)
                elif method == "POST":
                    test_data = {"client_name": f"test_{datetime.now().strftime('%H%M%S')}"}
                    response = requests.post(url, json=test_data, timeout=10)
                
                if response.status_code == 200:
                    self.log_test(f"{method} {endpoint}", True, f"{description} working correctly", 
                                f"Status: {response.status_code}")
                else:
                    self.log_test(f"{method} {endpoint}", False, f"{description} returned error", 
                                f"Status: {response.status_code}, Response: {response.text}")
                    
            except requests.exceptions.RequestException as e:
                self.log_test(f"{method} {endpoint}", False, f"Failed to test {description}", str(e))
    
    def run_all_tests(self):
        """Run all backend tests"""
        print(f"🚀 Starting Backend Testing for Smari Creatives Website")
        print(f"Backend URL: {self.backend_url}")
        print(f"API Base URL: {self.api_base}")
        print("=" * 60)
        
        # Run all test suites
        self.test_server_health()
        self.test_api_response_format()
        self.test_cors_configuration()
        self.test_mongodb_connection()
        self.test_environment_variables()
        self.test_port_binding()
        self.test_api_endpoints_comprehensive()
        
        # Summary
        print("\n" + "=" * 60)
        print("🏁 BACKEND TESTING SUMMARY")
        print("=" * 60)
        
        passed = sum(1 for result in self.test_results if result['success'])
        failed = sum(1 for result in self.test_results if not result['success'])
        total = len(self.test_results)
        
        print(f"Total Tests: {total}")
        print(f"✅ Passed: {passed}")
        print(f"❌ Failed: {failed}")
        print(f"Success Rate: {(passed/total)*100:.1f}%")
        
        if failed > 0:
            print("\n❌ FAILED TESTS:")
            for result in self.test_results:
                if not result['success']:
                    print(f"  - {result['test']}: {result['message']}")
        
        return passed, failed, total

if __name__ == "__main__":
    tester = BackendTester()
    passed, failed, total = tester.run_all_tests()
    
    # Exit with error code if tests failed
    sys.exit(0 if failed == 0 else 1)