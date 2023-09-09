# Address Database (RIvers State Sample)
This is a sample of 2500 buildings in Rivers state, Nigeria. You can visualize the data on either an [excel file](https://docs.google.com/spreadsheets/d/1ZMwKy-0u4b0o4S7rZWVz3gEvEnSu16A71gcR4E8flME/edit?usp=sharing) or a [web map](https://controleo.github.io/rvb/) using the embedded links. 

### Status: In Progress

## Overview 
The importance of crime and emergency response services in Africa cannot be overemphasised. An efficient response requires a comprehensive housing database to optimise navigation during an emergency. For a largely anonymous property ownership the urban-rural and the rural parts of Africa, this proves difficult. 
The goal of this project is to create  a model building database that can be adapted by government agencies and private organisations. 

## Features 
The database will include but not limited to the following:
+ Building type > Residential or commercial 
+ Building name > for commercial buildings
+ Coordinates 
+ Street number
+	Street name 
+	Postal code
+	City or Town
+	State
+	Country

Subsequently, the following features wil be included;
+	Owner
+	Size of plot
+	Owner history 
+	Number of residents
+	Occupation 
+	email 
+	Phone
+	Social link 
+	Next of Kin ID

## Data Source 
The building data was obtained from Open Street Map’s database. 
The user data will be obtained from the government’s physical land ownership data. 
All data will be verified by ground rooting. 

## Stack 
QGIS using the `mmqgis plugin`
`Google maps API`
Python libraries: `Geemap`, `Geopandas`, `Matplotlib`, 
`PostgreSQL` and the `PostGIS Database manager` on QGIS. 
`PgAdmin 4`

## Method and Results
Process:
+ Obtain vector data Open Street Map
+ Geocode data using Google maps API. The result: coordinates of each building, building names, building types, and addresses showing the city, postal code etc but not street names and house numbers for most.
+ Geocode the derived data using open street map’s Nominatm geocoder on python (libraries used: Geemaps, Geopandas)
+ Write SQL queries to extract available data into separate columns.
   
Next step: Populate personal user data (Yet to be done)
