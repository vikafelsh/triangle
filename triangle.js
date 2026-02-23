console.log("Info:");
console.log("leg — катет");
console.log("hypotenuse — гіпотенуза");
console.log("adjacent angle — прилеглий кут");
console.log("opposite angle — протилежний кут");
console.log("angle — гострий кут");

function triangle(e1, t1, e2, t2) {

  if (e1 <= 0 || e2 <= 0) {
    console.log("Сторони та кути повинні бути більшими за 0");
    return "failed";
  }

  if (t1 === "leg" && t2 === "hypotenuse" && e1 >= e2) {
    console.log("Катет має бути менший за гіпотенузу");
    return "failed";
  }
  if (t1 === "hypotenuse" && t2 === "leg" && e2 >= e1) {
    console.log("Катет має бути менший за гіпотенузу");
    return "failed";
  }

  const angleTypes = ["angle", "adjacent angle", "opposite angle"];

  if (angleTypes.includes(t1) && (e1 <= 0 || e1 >= 90)) {
    console.log("Кут має бути між 0 і 90");
    return "failed";
  }
  if (angleTypes.includes(t2) && (e2 <= 0 || e2 >= 90)) {
    console.log("Кут має бути між 0 і 90");
    return "failed";
  }
  
  const sideTypes = ["leg", "hypotenuse",];
  
  if (sideTypes.includes(t1) && e1 <= 0) {
  console.log("Сторона (катет або гіпотенуза) має бути більшою за 0");
  return "failed";
}

if (sideTypes.includes(t2) && e2 <= 0) {
  console.log("Сторона (катет або гіпотенуза) має бути більшою за 0");
  return "failed";
}

const EPS = 0.01;
  
if (a_angle < EPS || b_angle < EPS || 
    Math.abs(a_angle - 90) < EPS || 
    Math.abs(b_angle - 90) < EPS) {
  console.log("Занадто різні сторони");
  return "failed";
}
  
  const c_angle = 90;
  let a, b, c, a_angle, b_angle;

  const key = t1 + "|" + t2;

  switch (key) {

    case "leg|leg":
      a = e1;
      b = e2;
      c = Math.sqrt(a ** 2 + b ** 2);

      a_angle = Math.asin(a / c) * 180 / Math.PI;
      b_angle = c_angle - a_angle;
    break;
    
   case "leg|hypotenuse":
     a = e1;
     c = e2;
     b = Math.sqrt(c ** 2 - a ** 2);

     a_angle = Math.asin(a / c) * 180 / Math.PI;
     b_angle = c_angle - a_angle;
    break;


    case "hypotenuse|leg":
     c = e1;
     a = e2;
     b = Math.sqrt(c ** 2 - a ** 2);

     a_angle = Math.asin(a / c) * 180 / Math.PI;
     b_angle = c_angle - a_angle;
    break;

    case "leg|adjacent angle":
      a = e1;
      a_angle = e2;

      c = a / Math.cos(a_angle * Math.PI / 180);
      b = a * Math.tan(a_angle * Math.PI / 180);
      b_angle = c_angle - a_angle;
    break;


    case "adjacent angle|leg":
      a_angle = e1;
      a = e2;

      c = a / Math.cos(a_angle * Math.PI / 180);
      b = a * Math.tan(a_angle * Math.PI / 180);
      b_angle = c_angle - a_angle;
    break;

    case "leg|opposite angle":
      a = e1;
      a_angle = e2;

      c = a / Math.sin(a_angle * Math.PI / 180);
      b = c * Math.cos(a_angle * Math.PI / 180);
      b_angle = c_angle - a_angle;
    break;

    case "opposite angle|leg":
      a_angle = e1;
      a = e2;

      c = a / Math.sin(a_angle * Math.PI / 180);
      b = c * Math.cos(a_angle * Math.PI / 180);
      b_angle = c_angle - a_angle;
    break;
     
   case "hypotenuse|angle":
      c = e1;
      a_angle = e2;

      a = c * Math.sin(a_angle * Math.PI / 180);
      b = c * Math.cos(a_angle * Math.PI / 180);
      b_angle = c_angle - a_angle;
    break;

   case "angle|hypotenuse":
      a_angle = e1;
      c = e2;
      b_angle = 90 - a_angle;
      a = c * Math.sin(a_angle * Math.PI / 180);
      b = c * Math.cos(a_angle * Math.PI / 180);
   break;
    
    default:
      console.log("Прочитай інструкцію ще раз");
      return "failed";
  }

  if ((angleTypes.includes(t1) && (e1 === 30 || e1 === 60)) || 
  (angleTypes.includes(t2) && (e2 === 30 || e2 === 60))) {
  console.log("Правило 30-60-90");
  }
  if ((a === 3 && b === 4 && c === 5) ||
  (a === 4 && b === 3 && c === 5)) {
  console.log("Єгипетський трикутник 3-4-5");
  }

  console.log("leg a =", a);
  console.log("leg b =", b);
  console.log("hypotenuse =", c);
  console.log("angle a =", a_angle);
  console.log("angle b =", b_angle);
  console.log("angle c =", c_angle);

  return "success";

}
