# Project: HNG-Persons Rest-API

## End-point: Add New Person
### Method: POST
>```
>https://hng-backend-stage2-ocjuzdy8s-paschalpm.vercel.app/api/
>```
### Body (**raw**)

```json
{
    "name": "Mark Essien"
}
```

### Response: 201
```json
{
    "id": "650400827e00a61789aff304",
    "name": "Mark Essien"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get All Persons
### Method: GET
>```
>https://hng-backend-stage2-ocjuzdy8s-paschalpm.vercel.app/api/
>```
### Response: 200
```json
[
    {
        "name": "Paschal Okafor",
        "id": "65038c67a9e79d531269b828"
    },
    {
        "name": "Mark Essien",
        "id": "650400827e00a61789aff304"
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get A Person
### Method: GET
>```
>https://hng-backend-stage2-ocjuzdy8s-paschalpm.vercel.app/api//:user_id
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Response: 200
```json
{
    "name": "Paschal Okafor",
    "id": "65038c67a9e79d531269b828"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Person
### Method: PUT
>```
>https://hng-backend-stage2-ocjuzdy8s-paschalpm.vercel.app/api//:user_id
>```
### Body (**raw**)

```json
{"name": "Haruna O. Haruna"}
```

### Response: 200
```json
{
    "id": "65038ed2ff5d0e6ba0616aaf",
    "name": "SIR. MARK ESSIEN"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Person
### Method: DELETE
>```
>https://hng-backend-stage2-ocjuzdy8s-paschalpm.vercel.app/api//:user_id
>```
### Response: 204
```json
null
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
