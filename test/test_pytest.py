import pytest
import requests
import json


def setup():
    url = "http://localhost:3000/student"
    payload = {"username": "testuser", "password": "secretpassword", "age": 25}
    headers = {"Content-Type": "application/json"}

    return url, payload, headers

def test_get_all_students():
    url, _, _ = setup()

    response = requests.get(url)

    assert response.status_code == 200
    assert all(d["username"] == "testuser" for d in response.json())
    
def test_create_student():
    url, payload, headers = setup()

    response = requests.post(url, json=payload, headers=headers)
    
    assert response.status_code == 201

def test_get_student_by_id():
    # first, get a student by creating one
    url, _, _ = setup()

    # then, get the student by id
    url = f"{url}/{4}"

    response = requests.get(url)

    assert response.status_code == 200
    assert response.json().get("username") == "testuser" and response.json().get("age") == 25

def test_update_student():
    # first, get a student by creating one
    url, payload, headers = setup()

    response = requests.post(url, json=payload, headers=headers)

    student_id = response.json()["id"]

    # then, update the student
    url = f"{url}/{student_id}"
    payload = {"username": "updatedtestuser", "age": 26, "password": "secretpassword"}

    response = requests.put(url, json=payload, headers=headers)

    assert response.status_code == 200
   
def test_delete_student():
    # first, get a student by creating one
    url, payload, headers = setup()

    response = requests.post(url, json=payload, headers=headers)

    student_id = response.json()["id"]

    # then, delete the student
    url = f"{url}/{student_id}"

    response = requests.delete(url)

    assert response.status_code == 200
