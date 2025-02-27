// Arrow Down

const arrowDown = document.querySelector(".arrowDown");

gsap.set(arrowDown, { transformOrigin: "center center" });

function animateArrowDown() {
  gsap.set(arrowDown, { y: -50, opacity: 1 }); // Start the arrow offscreen above
  
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 })
    .to(arrowDown, { y: 0, duration: .75, ease: "power1.out" }) // Drop down into position
    .to(arrowDown, { scale: 1.2, duration: 0.2, ease: "power1.out" }) // Grow
    .to(arrowDown, { rotation: -5, duration: 0.1, ease: "power1.inOut" }) // Shake left
    .to(arrowDown, { rotation: 5, duration: 0.1, ease: "power1.inOut" }) // Shake right
    .to(arrowDown, { rotation: 0, duration: 0.1, ease: "power1.inOut" }) // Reset rotation
    .to(arrowDown, { scale: 1, duration: 0.2, ease: "power1.in" }) // Shrink back
    .to(arrowDown, { scale: 1, duration: 0.2, opacity: 0, ease: "power1.in" })
    .set(arrowDown, { y: 0, duration: 1,  ease: "power1.out" }) // Reset position above screen before looping
}

animateArrowDown();

//Arrow Up

const arrowUp = document.querySelector(".arrowUp");

    gsap.set(arrowUp, { transformOrigin: "center center", opacity: 0 });

    function animateArrowUp() {
        gsap.timeline({ repeat: -1, repeatDelay: 0.5 })
      .to(arrowUp, {  opacity: 1, duration: 0.5, ease: "power1.out" })
            .to(arrowUp, { scale: 1.2, duration: 0.2, ease: "power1.out" }) // Grow
            .to(arrowUp, { rotation: 5, duration: 0.1, ease: "power1.inOut" }) // Shake right
            .to(arrowUp, { rotation: -5, duration: 0.1, ease: "power1.inOut" }) // Shake left
            .to(arrowUp, { rotation: 0, duration: 0.1, ease: "power1.inOut" }) // Reset rotation
            .to(arrowUp, { scale: 1, duration: 0.2, ease: "power1.in" }) // Shrink back
            .to(arrowUp, { y: -20, duration: 0.5, ease: "power1.in" }) // Move up
            
            .set(arrowUp, { y: 10, opacity: 0 }) // Reset position offscreen

            .to(arrowUp, { y: 0, duration: 0.5, ease: "power1.out" }); // Return to original position
    }

    animateArrowUp();

// Github Wave

const arm = document.querySelector(".arm");

gsap.set(".arm", { transformOrigin: "bottom right" });

function animateArm() {
  gsap.set(arm, {});

  const tl = gsap
    .timeline({ repeat: -1 })

    .to(arm, { rotation: 50, duration: 1, ease: "power1.out" })
    .to(arm, { rotation: 0, duration: 1, ease: "power1.out" });
}

animateArm();