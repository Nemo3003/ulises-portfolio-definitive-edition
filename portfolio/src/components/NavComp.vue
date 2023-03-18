<!-- eslint-disable prettier/prettier -->
<template>
<nav class="navbar text-center  navbar-expand-lg navbar-light bg-light fixed-top     ">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto mr-auto mt-2 mt-lg-0 mx-auto">
            <li class="nav-item active">
                <router-link to="/" class="nav-link ">Home</router-link>
            </li>
            <li class=" nav-item">
                <router-link to="/education" class="nav-link" >Education</router-link>
            </li>
            <li class=" nav-item">
                <router-link to="/projects"  class="nav-link nav-item">Projects</router-link>
            </li>
            <li class=" nav-item">
                <router-link to="/about" class="nav-link nav-item">About</router-link>
            </li>
        </ul>
        </div>
    </nav>
    
  <footer class="bg-light text-center text-lg-start fixed-bottom">
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © {{new Date().getFullYear()}} Copyright
      <p class="text-dark">Ulises Mariano Melgarejo</p>
    </div>
    <!-- Copyright -->
    </footer>
    <router-view />

</template>