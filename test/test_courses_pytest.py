import pytest
import requests
import json

def setup_courses():
    url = "http://localhost:3000/course"
    payload = {"name": "Test Course", "description": "Test Description", "price": 100, "duration": 12}
    headers = {"Content-Type": "application/json"}

    return url, payload, headers

def test_get_all_courses():
    url, _, _ = setup_courses()

    response = requests.get(url)

    assert response.status_code == 200
    assert all(d.get("name") for d in response.json())

def test_create_course():
    
    url, payload, headers = setup_courses()
    url = f"{url}/{8}"

    response = requests.post(url, json=payload, headers=headers)
   
    assert response.status_code == 201

def test_get_course_by_Uni_id():

    url, _, _ = setup_courses()

    # get the course by uniId
    url = f"{url}/{8}"

    response = requests.get(url)
    courses = response.json()

    assert response.status_code == 200
    
    assert len(courses) > 0
    # i could do a for loop to check all the courses in the list
    

def test_update_course():
    # first, creating one course
    url, payload, headers = setup_courses()


    # then, update the course
    url = f"{url}/{1}"
    payload = {"name": "Updated Test Course", "description": "Updated Test Description", "price": 200, "duration": 24}

    response = requests.put(url, json=payload, headers=headers)

    assert response.status_code == 200
    assert response.json().get("message") == "updated succesfully"

def test_delete_course():
    url, payload, headers = setup_courses()
    #post the course, to uni 1
    temp_url = f"{url}/{1}"
    response = requests.post(temp_url, json=payload, headers=headers)
    #get the id of the course
    id = response.json().get("id")
    #then, delete the course
    url = f"{url}/{id}"
       
    # then, delete the course
    response = requests.delete(url)

   
    assert response.status_code == 200
    assert response.json().get("message") == "deleted succesfully"

##should fail tests
def test_create_course_should_fail():
    url, payload, headers = setup_courses()
    url = f"{url}/{3}"
    # removing required field "name" from payload
    payload.pop("name")
    response = requests.post(url, json=payload, headers=headers)

    assert response.status_code == 400
    assert response.json().get("message") == "Cannot POST /course"

def test_create_course_by_non_existent_uni():
    url, payload, headers = setup_courses()
    url = f"{url}/{9999}"
    
    response = requests.post(url, json=payload, headers=headers)

    assert response.status_code == 404
    assert response.json().get("message") == "University with the specified ID not found"

def test_get_course_by_non_existent_Uni_id():
    url, _, _ = setup_courses()

    university_id = 999999
    url = f"{url}/{university_id}"
    response = requests.get(url)

    assert response.status_code == 404
    assert response.json().get("message") == "Course not found"
    

def test_update_course_with_non_existent_id():
    url, payload, headers = setup_courses()

    id = 999999
    url = f"{url}/{id}"
    response = requests.put(url, json=payload, headers=headers)

    assert response.status_code == 404
    assert "Course not found" in response.json()["message"]

def test_delete_university_with_non_existent_id():
    url, _, _ = setup_courses()

    id = 999999
    url = f"{url}/{id}"
    response = requests.delete(url)

    assert response.status_code == 404
    assert "Course not found" in response.json()["message"]