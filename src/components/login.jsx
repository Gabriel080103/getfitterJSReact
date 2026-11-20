import { useState, useEffect } from "react";

function login() {
useEffect(() => {
fetch("http://localhost:7070/api/auth/login")
.then(response => response.json())
.then(data => {
    
})
})


}