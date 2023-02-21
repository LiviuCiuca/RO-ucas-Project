import pytest
import requests
import json

def setup():
    url = "http://localhost:3000/university"
    payload = {"name": "Test University of testing", "email": "test@university.com", "location": "Test City"}
    headers = {"Content-Type": "application/json"}

    return url, payload, headers

def test_get_all_universities():
    url, _, _ = setup()

    response = requests.get(url)

    assert response.status_code == 200
    assert all(d.get("name") for d in response.json())

def test_create_university():
    url, payload, headers = setup()

    response = requests.post(url, json=payload, headers=headers)

    assert response.status_code == 201

def test_get_university_by_id():
    # first, getting a university by creating one
    url, payload, headers = setup()

    response = requests.post(url, json=payload, headers=headers)

    university_id = response.json()["id"]

    # then, get the university by id
    url = f"{url}/{university_id}"

    response = requests.get(url)

    assert response.status_code == 200
    assert response.json().get("name") == "Test University of testing" and response.json().get("location") == "Test City"

def test_update_university():
    # first, creating one university
    url, payload, headers = setup()

    response = requests.post(url, json=payload, headers=headers)

    university_id = response.json()["id"]

    # then, update the university
    url = f"{url}/{university_id}"
    payload = {"name": "Updated Test University", "location": "Updated Test City", "email": "test@university.com"}

    response = requests.put(url, json=payload, headers=headers)

    assert response.status_code == 200
    assert response.json().get("name") == "Updated Test University" and response.json().get("location") == "Updated Test City"
    
    

def test_delete_university():
    # first, creating one university
    url, payload, headers = setup()

    response = requests.post(url, json=payload, headers=headers)
    university_id = response.json()["id"]

    # then, delete the university
    url = f"{url}/{university_id}"

    response = requests.delete(url)

    assert response.status_code == 200

def test_create_university_should_fail():
    url, payload, headers = setup()
    
    # removing required field "name" from payload
    payload.pop("name")
    response = requests.post(url, json=payload, headers=headers)

    assert response.status_code == 400
    assert "name must be a string" in response.json()["message"]
    

def test_get_university_by_non_existent_id():
    url, _, _ = setup()

    university_id = 999999
    url = f"{url}/{university_id}"
    response = requests.get(url)

    assert response.status_code == 404
    assert "University not found" in response.json()["message"]

def test_update_university_with_non_existent_id():
    url, payload, headers = setup()

    university_id = 999999
    url = f"{url}/{university_id}"
    response = requests.put(url, json=payload, headers=headers)

    assert response.status_code == 404
    assert "University not found" in response.json()["message"]

def test_delete_university_with_non_existent_id():
    url, _, _ = setup()

    university_id = 999999
    url = f"{url}/{university_id}"
    response = requests.delete(url)

    assert response.status_code == 404
    assert "University not found" in response.json()["message"]