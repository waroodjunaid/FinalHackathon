const firebaseConfig = {
    
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

console.log(db)

const submitFormToDb = () => {
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const phone = document.getElementById('phone').value

  db.collection("contact")
  .add({
    name,
    email,
    phone,
    subject,
    message,
    date: new Date()
  })
  .then((docRef) => {
    console.log("Form Submitted: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
}

const submitForm = document.getElementById('submit');
submitForm.addEventListener('click', submitFormToDb);

const getFormData = async () => {
  let val = null;
  try {
      const data = await db.collection("contact").get();
      console.log("contacts ..............", data);
      data.forEach((doc) => {
          val = JSON.stringify(doc.data());
      });
  } catch (error) {
      console.error("Error fetching data:", error);
  }
  document.getElementById('data').innerText = val
};

getFormData()

function expandContent(button) {
    const shortContent = button.parentElement;
    const fullContent = shortContent.nextElementSibling;

    shortContent.style.display = "none";
    fullContent.style.display = "block";
}

document.querySelector('.login-register').addEventListener('click', () => {
    alert('Login/Register feature is under construction!');
});

document.querySelector('.newsletter form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
});







