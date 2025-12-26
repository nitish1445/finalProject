function search() {
  const state = document.getElementById("stateName").value.toLowerCase();

  const flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "text-danger", "fs-4");
  flag.style.position = "absolute";

  if (state === "bihar") {
    flag.style.top = "165px";
    flag.style.left = "300px";
    flag.title = "State : Bihar \nCapital : Patna";
  }
  if (state === "jharkhand") {
    flag.style.top = "200px";
    flag.style.left = "285px";
    flag.title = "State : Jharkhand \nCapital : Ranchi";
  }
  if (state === "west bengal" || state === "wb") {
    flag.style.top = "200px";
    flag.style.left = "330px";
    flag.title = "State : West Bengal \nCapital : Kolkata";
  }

  if (state === "up" || state === "uttar pradesh") {
    flag.style.top = "150px";
    flag.style.left = "220px";
    flag.title = "State : Uttar Pradesh \nCapital : Lucknow";
  }
  if (state === "mp" || state === "madhya pradesh") {
    flag.style.top = "200px";
    flag.style.left = "170px";
    flag.title = "State : Madhya Pradesh \nCapital : Bhopal";
  }
  if (state === "gujrat") {
    flag.style.top = "200px";
    flag.style.left = "80px";
    flag.title = "State : Gijarat \nCapital : Gandhi Nagar";
  }
  if (state === "rajasthan") {
    flag.style.top = "150px";
    flag.style.left = "110px";
    flag.title = "State : Rajastan \nCapital : Jaipur";
  }
  if (state === "delhi") {
    flag.style.top = "115px";
    flag.style.left = "167px";
    flag.title = "State : Delhi \nCapital : Delhi";
  }
  if (state === "haryana") {
    flag.style.top = "110px";
    flag.style.left = "155px";
    flag.title = "State : Haryana \nCapital : Chandigarh";
  }
  if (state === "punjab") {
    flag.style.top = "80px";
    flag.style.left = "147px";
    flag.title = "State : Punjab \nCapital : Chandigarh";
  }
  if (state === "uttarakhand") {
    flag.style.top = "95px";
    flag.style.left = "195px";
    flag.title = "State : Uttrakhand \nCapital : Dehradun";
  }
  if (state === "hp" || state === "himachal pradesh") {
    flag.style.top = "70px";
    flag.style.left = "170px";
    flag.title = "State : Himachal Pradesh \nCapital : Sillong";
  }
  if (state === "jk") {
    flag.style.top = "45px";
    flag.style.left = "145px";
    flag.title = "State : Jammu And Kashmir \nCapital : Jammu";
  }
  if (state === "ladakh") {
    flag.style.top = "35px";
    flag.style.left = "170px";
    flag.title = "State : Ladakh \nCapital : Leh";
  }

  if (state === "maharastra") {
    flag.style.top = "260px";
    flag.style.left = "140px";
    flag.title = "State : Maharastra \nCapital : Mumbai";
  }
  if (state === "karnataka") {
    flag.style.top = "330px";
    flag.style.left = "130px";
    flag.title = "State : Karnataka \nCapital : Benguluru";
  }
  if (state === "telengana") {
    flag.style.top = "280px";
    flag.style.left = "180px";
    flag.title = "State : Telengana \nCapital : Hyderabad";
  }
  if (state === "andhra pradesh" || state === "ap") {
    flag.style.top = "325px";
    flag.style.left = "185px";
    flag.title = "State : Andhra Pradesh \nCapital : Hyderabad";
  }
  if (state === "tamil nadu" || state === "tn") {
    flag.style.top = "390px";
    flag.style.left = "175px";
    flag.title = "State : TamilNadu \nCapital : Chennai";
  }
  if (state === "kerala") {
    flag.style.top = "390px";
    flag.style.left = "138px";
    flag.title = "State : Kerala \nCapital : Trianathampuram";
  }
  if (state === "goa") {
    flag.style.top = "314px";
    flag.style.left = "106px";
    flag.title = "State : Goa \nCapital : Panji";
  }
  if (state === "chattisgarh") {
    flag.style.top = "230px";
    flag.style.left = "230px";
    flag.title = "State : Chattisgarh \nCapital : Raipur";
  }
  if (state === "odisha") {
    flag.style.top = "240px";
    flag.style.left = "275px";
    flag.title = "State : Odisha \nCapital : Bhubneswar";
  }
  if (state === "an") {
    flag.style.top = "368px";
    flag.style.left = "417px";
    flag.title = "State : Andaman & Nicobar";
  }

  if (state === "sikkim") {
    flag.style.top = "132px";
    flag.style.left = "337px";
    flag.title = "State : Sikkim \nCapital : Gangtok";
  }

  if (state === "assam") {
    flag.style.top = "150px";
    flag.style.left = "380px";
    flag.title = "State : Assam \nCapital : ";
  }

  if (state === "arunachal pradesh") {
    flag.style.top = "120px";
    flag.style.left = "425px";
    flag.title = "State : Arunchal pradesh \nCapital : Itanagar";
  }

  if (state === "nagaland") {
    flag.style.top = "153px";
    flag.style.left = "427px";
    flag.title = "State : Nagaland \nCapital : kohima";
  }
  if (state === "manipur") {
    flag.style.top = "175px";
    flag.style.left = "418px";
    flag.title = "State : Manipur \nCapital : ";
  }
  if (state === "mizoram") {
    flag.style.top = "190px";
    flag.style.left = "405px";
    flag.title = "State : Mizoram \nCapital : ";
  }
  if (state === "tripura") {
    flag.style.top = "190px";
    flag.style.left = "388px";
    flag.title = "State : tripura \nCapital : ";
  }
  if (state === "meghalya") {
    flag.style.top = "163px";
    flag.style.left = "380px";
    flag.title = "State : Meghalaya \nCapital : ";
  }

  document.getElementById("map").appendChild(flag);
  document.getElementById("stateName").value = "";
}
function selectAll() {
  const state = document.getElementById("stateName").value.toLowerCase();

  const flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "text-danger", "fs-4");
  flag.style.position = "absolute";
  flag.style.top = "165px";
  flag.style.left = "300px";
  flag.title = "State : Bihar \nCapital : Patna";
  document.getElementById("map").appendChild(flag);
  document.getElementById("stateName").value = "";
}
function clearAll() {
  window.location.reload();
}
