//Username: Letters, numbers, spaces, dashes allowed
export function isValidUserName(val) {
  return /^[a-zA-Z0-9_]{1,30}$/.test(val.trim());
}

//Email: Noroff/stud.noroff only
export function isValidEmail(val) {
  return /^[\w\-.]+@(stud\.)?noroff\.no$/.test(val);
}

//Password: 8–30 chars
export function isValidPassword(val) {
  return typeof val === "string" && val.length >= 8 && val.length <= 30;
}

//Confirm Password: Matches original password
export function isValidConfirmPassword(confirmInput, originalInput) {
  return function () {
    return confirmInput.value === originalInput.value;
  };
}

//Name: Letters and a space allowed
export function isValidName(val) {
  return /^[A-Za-z ]{2,30}$/.test(val.trim());
}

//Age: Numeric 0–99
export function isValidAge(val) {
  return /^\d{1,2}$/.test(val) && Number(val) >= 0 && Number(val) <= 99;
}

//Breed: Optional
export function isValidBreed(val) {
  return val === "" || /^[\w\s-]{1,30}$/.test(val);
}

//Description: Min 10 chars
export function isValidDescription(val) {
  return typeof val === "string" && val.trim().length >= 10;
}

//Location: Alphanumeric and punctuation
export function isValidLocation(val) {
  return /^[\w\s,.-]{2,50}$/.test(val.trim());
}

//Size: Number preceding kg, lbs or pounds
export function isValidSize(val) {
  return (
    val === "" ||
    /^\d+(?:[.,]\d+)?\s?(kg|lbs|pounds|kilograms|g|grams)$/.test(val.trim())
  );
}

//Image URL: Must start with http/https and be an image
export function isValidUrl(val) {
  return /^https:\/\/[^\s]+$/.test(val.trim());
}

//Alt text: Optional
export function isValidImageAlt(val) {
  return val === "" || val.trim().length > 2;
}
