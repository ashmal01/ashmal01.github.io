function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    window.location.href="cv.html";
  }
  function submitForm() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const comments = document.getElementById('comments').value;
    const contactForm = {
      name: name,
      address: address,
      email: email,
      comments: comments
    };
    localStorage.setItem('contactForm', JSON.stringify(contactForm));
  }
 
  function initMap(){
    const place ={ lat:40.712}
    //center
    const map = new google.maps.Map(document.getElementById("map"),{
      zoom:50,
      center:place,
    });
 
  //marker positioned at the place
  const marker = new google.maps.Marker({
    position: place,
    map: map,
  }) ;  
}
