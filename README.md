# backendindiatoday

Hi All,
I have create a small Backend application In which I create Some Api for create,read and update the user profile data and another api for read the news data
And Its postman collection present in the same folder of project with name ApiCollection.json



![image](https://user-images.githubusercontent.com/43082508/154815646-70310ffe-12f8-4b53-b719-63e64a88ce55.png)

I have attached some Outputs of API Call from postman
##############################################################################################################
1. Upload Profile Picture:-
first Under resource folder there is no file
![image](https://user-images.githubusercontent.com/43082508/154815799-61387fe1-f4a3-4d7a-a30f-977947d820aa.png)

After call this Api
![image](https://user-images.githubusercontent.com/43082508/154815772-b395deb4-3177-4dbe-af2e-44786f58f5c4.png)

we got the data in Resource folder, A New has added
![image](https://user-images.githubusercontent.com/43082508/154815853-38b8759b-ccad-4de6-b490-3f97a746949d.png)
 and this is the response in postman
 ![image](https://user-images.githubusercontent.com/43082508/154815864-65f95385-3147-4462-9830-04df8e55ee77.png)

##############################################################################################################
2. Create Profile data In database

In Our mongoDb Database, There is no data present
![image](https://user-images.githubusercontent.com/43082508/154815932-9174442c-2fe5-47c1-b59a-02aa110cd7d0.png)

We will give the name of file under profile picture which was upload in previous step
![image](https://user-images.githubusercontent.com/43082508/154815981-6033c42d-e026-44db-88c7-56df5e4e029f.png)

data come under the database
![image](https://user-images.githubusercontent.com/43082508/154816014-f6a465e2-272f-48ca-a441-275b5c6d34b7.png)

#############################################################################################################
3. Read Profile data
Send a query from postman like this
![image](https://user-images.githubusercontent.com/43082508/154816060-a0f51afb-edb8-448d-92f3-0c9c14999297.png)

we will retrive the data in response
![image](https://user-images.githubusercontent.com/43082508/154816099-5828fb48-b32f-40f8-a700-f8173228484f.png)

#############################################################################################################
4. Get All News data
Send a query from Postman like this we will retrive whole data 
![image](https://user-images.githubusercontent.com/43082508/154816154-e9b91b16-8392-4335-8168-bb03af9f7ffa.png)
and this is our response in postman
![image](https://user-images.githubusercontent.com/43082508/154816167-2cfce686-c29e-4902-aa90-5af1f28ba8cd.png)

and In Application It looks like this
![image](https://user-images.githubusercontent.com/43082508/154816207-977ef293-5f0d-4ddc-a4b2-5f6c4512314c.png)

############################################################################################################
