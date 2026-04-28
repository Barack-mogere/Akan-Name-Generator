
function generateName() {
  let day = parseInt(document.getElementById("day").value);
  let month = parseInt(document.getElementById("month").value);
  let year = parseInt(document.getElementById("year").value);
  let gender = document.getElementById("gender").value;

  if (!day || !month || !year || gender === "") {
    document.getElementById("result").innerText =
      "Please fill all fields";
    return;
  }

  let CC = Math.floor(year / 100);
  let YY = year % 100;

  let weekDay = Math.floor(
    ((CC / 4) - 2 * CC - 1 + (5 * YY / 4) + (26 * (month + 1) / 10) + day
    ) % 7
  );

  if (weekDay < 0) {
    weekDay += 7;
  }

  let maleNames = [
    "Kwasi", "Kwadwo", "Kwabena",
    "Kwaku", "Yaw", "Kofi", "Kwame"
  ];

  let femaleNames = [
    "Akosua", "Adwoa", "Abenaa",
    "Akua", "Yaa", "Afua", "Ama"
  ];

let akanName;

      if (gender === "male") {
        akanName = maleNames[weekDay];
      } else if (gender === "female") {
        akanName = femaleNames[weekDay];
      } 

  document.getElementById("result").innerText =
    akanName;
}
