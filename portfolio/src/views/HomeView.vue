<!-- eslint-disable prettier/prettier -->

<template>
  <div class="container">
      <div class="row ">
        <h2>
          Welcome to my portfolio! <br>
          I am Ulises Mariano Melgarejo
        </h2>
      </div>

        <div class="row row-cols-2 d-flex justify-content-center align-items-center text-center">
          <div class="col colors "><router-link to="/about" ><h3>About me</h3></router-link></div>
          <div class="col colors"><router-link to="/education" ><h3>My education</h3></router-link></div>
          <div class="col colors"><router-link to="/projects" ><h3>My projects</h3></router-link></div>
          <div class="col colors"><router-link to="/" ><h3>Contact me</h3></router-link></div>
        </div>
      </div>
 
</template>
<style>
html {
  max-height: fit-content;
}
.colors {
  padding: 8rem;
  border: 2px solid black;
  cursor: pointer;
}
.colors:nth-child(1) {
  background-color: #59cd90;
}
.colors:nth-child(2) {
  background-color: #3fa7d6;
}
.colors:nth-child(3) {
  background-color: #fac05e;
}
.colors:nth-child(4) {
  background-color: #f79d84;
}
.colors:hover {
  background-color: #d8bfb8;
  border: 5px solid black;
}

@media (max-width: 768px) {
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .col {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
