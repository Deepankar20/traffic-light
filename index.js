 // Set up the scene
 const scene = new THREE.Scene();

 // Set up camera
 const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
 camera.position.set(-0.75, 3, 10);
 
 // Set up renderer
 const renderer = new THREE.WebGLRenderer();
 renderer.setSize(window.innerWidth, window.innerHeight);
 renderer.setClearColor("lightblue");
 document.getElementById('scene-container').appendChild(renderer.domElement);
 
 // Create a road
 const roadGeometry = new THREE.BoxGeometry(100, 0.1, 2);
 const roadMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
 const road = new THREE.Mesh(roadGeometry, roadMaterial);
 scene.add(road);
 
 // Create a car
 const carGeometry = new THREE.BoxGeometry(1, 0.5, 0.5);
 const carMaterial = new THREE.MeshBasicMaterial({ color: 0x0077ff });
 const car = new THREE.Mesh(carGeometry, carMaterial);
 car.position.set(-10, 0.25, 0);
 scene.add(car);
 
 // Create a traffic light
 const trafficLightGeometry = new THREE.BoxGeometry(0.1, 2, 0.1);
 const trafficLightBoxGeometry = new THREE.BoxGeometry(0.21, 1.61, 1);
 const trafficLightPole = new THREE.Mesh(trafficLightGeometry, new THREE.MeshBasicMaterial({ color: "yellow" }));
 trafficLightPole.position.set(3.12, 1, 0);
 scene.add(trafficLightPole);
 
 const lightBox =  new THREE.Mesh(trafficLightBoxGeometry, new THREE.MeshBasicMaterial({ color: "yellow" }));
 lightBox.position.set(3.12,2.48, 0);
 scene.add(lightBox)
 
 const redLight = new THREE.Mesh(new THREE.SphereGeometry(0.2, 0, 32), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
 redLight.position.set(3, 3, 0);
 scene.add(redLight);
 
 const yellowLight = new THREE.Mesh(new THREE.SphereGeometry(0.2, 0, 32), new THREE.MeshBasicMaterial({ color: "orange" }));
 yellowLight.position.set(3, 2.5, 0);
 scene.add(yellowLight);
 
 const greenLight = new THREE.Mesh(new THREE.SphereGeometry(0.2, 0, 32), new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
 greenLight.position.set(3, 2, 0);
 scene.add(greenLight);
 
 let currentLight = 'red'; // Initial traffic light color
 
 let x = 0;
 function moveCar(){
     car.position.set(-10+x,0.25,0);
     x=x+0.11;
 }
 
 // Function to toggle the traffic light color
 function toggleTrafficLightColor(currentLight) {
     if (currentLight === 'red') {
         // redLight.material.color.set(0x000000); // Change to green
         yellowLight.material.color.set(0x333333); // Turn off yellow
         greenLight.material.color.set(0x333333); // Turn off green
        
     } 
     if (currentLight === 'yellow') {
         redLight.material.color.set(0x333333); // Change to green
         yellowLight.material.color.set("orange");// Turn off yellow
         greenLight.material.color.set(0x333333); // Turn off green
        
     } 
     if (currentLight === 'green') {
         redLight.material.color.set(0x333333); // Change to green
         yellowLight.material.color.set(0x333333); // Turn off yellow
         greenLight.material.color.set("green"); // Turn off green
        
     } 
 
 
     if(currentLight==="green"){
         setInterval(moveCar,10)
     }
 }
 
 // Animation loop
 const animate = () => {
     requestAnimationFrame(animate);
 
     // You can move the car or perform other animations here
 
     renderer.render(scene, camera);
 };
 
 animate();
 
 // Toggle the traffic light color every 2 seconds (for example)
 // setInterval(toggleTrafficLightColor, 2000);
 const arr = ["red","yellow","green"];
 
 const btn = document.getElementById("changeLight")
  
 toggleTrafficLightColor(arr[0])
 
 setTimeout(() => {
     toggleTrafficLightColor(arr[1])
 }, 2000);
 
 setTimeout(() => {
     toggleTrafficLightColor(arr[2])
 }, 5000);
 