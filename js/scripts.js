const apiUrl = "../hoteldata.json";

fetch(apiUrl)
  .then((response) => response.json())
  .then((myList) => {
    console.log(myList);

    for (const hotel of myList){
      let myImage = document.createElement("img");
      myImage.src = hotel.photo;
      let myCaption = document.createElement("figcaption");
      myCaption.textContent = hotel.name;


      let myFigure = document.createElement("figure");
      myFigure.appendChild(myImage);
      myFigure.appendChild(myCaption);
      


      let addressIcon = document.createElement('ion-icon');
      addressIcon.name = 'car-outline';

      let streetAddress = document.createElement('p');
      streetAddress.textContent = hotel.address[0];
      let otherAddress = document.createElement('p');
      otherAddress.textContent = hotel.address[1];

      let addressSpan = document.createElement('span');
      addressSpan.appendChild(addressIcon);
      addressSpan.appendChild(streetAddress);
      addressSpan.appendChild(otherAddress);

      let phoneIcon = document.createElement('ion-icon');
      phoneIcon.name = 'call-outline';
      let phoneNumber = document.createElement('p');
      phoneNumber.textContent = hotel.phone

      let phoneSpan = document.createElement('span');
      phoneSpan.appendChild(phoneIcon);
      phoneSpan.appendChild(phoneNumber);

      let myDiv = document.createElement('div');
      myDiv.appendChild(addressSpan);
      myDiv.appendChild(phoneSpan);

      let mySection = document.createElement('section');
      mySection.appendChild(myFigure);
      mySection.appendChild(myDiv);

      document.getElementById('hotels').appendChild(mySection);
    }
  });