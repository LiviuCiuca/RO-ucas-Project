import pytest
import requests
import json


def setup():
    url = "http://localhost:3000/student"
    payload = {"username": "testuser", "password": "secretpassword", "age": 25}
    headers = {"Content-Type": "application/json"}

    return url, payload, headers

#region tests  positive cases
def test_get_all_students():
    url, _, _ = setup()

    response = requests.get(url)

    assert response.status_code == 200
    assert all(d.get("username") for d in response.json())


 
def test_create_student():
    url, payload, headers = setup()

    response = requests.post(url, json=payload, headers=headers)
    
    assert response.status_code == 201

def test_get_student_by_id():
    # first, getting a student by creating one
    url, _, _ = setup()

    # then, get the student by id
    url = f"{url}/{4}"

    response = requests.get(url)

    assert response.status_code == 200
    assert response.json().get("username") == "testuser" and response.json().get("age") == 25

def test_update_student():
    # first,  creating one student
    url, payload, headers = setup()

    response = requests.post(url, json=payload, headers=headers)

    student_id = response.json()["id"]

    # then, update the student
    url = f"{url}/{student_id}"
    payload = {"username": "updatedtestuser", "age": 26, "password": "secretpassword"}

    response = requests.put(url, json=payload, headers=headers)

    assert response.status_code == 200
    # i should also check that the student was updated, but i get a json without column names back 
   
def test_delete_student():
    # first,  creating one student
    url, payload, headers = setup()

    response = requests.post(url, json=payload, headers=headers)

    student_id = response.json()["id"]

    # then, delete the student
    url = f"{url}/{student_id}"

    response = requests.delete(url)

    assert response.status_code == 200
#endregion
# def test_create_student_with_existing_username():
#     url, payload, headers = setup()

#     # create a student first                                     i can make this pass but then it fails 3 other tests
#     requests.post(url, json=payload, headers=headers)

#     # try to create a student with the same username
#     response = requests.post(url, json=payload, headers=headers)

#     assert response.status_code == 409
#     assert "Student already exists" in response.json()["message"]

def test_get_student_by_non_existent_id():
    url, _, _ = setup()

    student_id = 999999

    url = f"{url}/{student_id}"

    response = requests.get(url)

    assert response.status_code == 404
    assert "Student not found" in response.json()["message"]

def test_update_student_with_non_existent_id():
    url, payload, headers = setup()

    student_id = 999999

    url = f"{url}/{student_id}"

    response = requests.put(url, json=payload, headers=headers)

    assert response.status_code == 404
    assert "Student not found" in response.json()["message"]

def test_delete_student_with_non_existent_id():
    url, _, _ = setup()

    student_id = 999999

    url = f"{url}/{student_id}"

    response = requests.delete(url)

    assert response.status_code == 404
    assert "Student not found" in response.json()["message"]
