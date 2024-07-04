const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from(".nav" , {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: "expo.inOut",
    })
    .to(".boundingelem" , {
       y: 0,
       ease: "expo.inOut",
       duration: 2,
       delay: -1,
       stagger: .2
    })
    .from(".herofooter" , {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1 ,
        ease: "expo.inOut",
     })
}

window.addEventListener('load', firstPageAnim);

function circleMouseFollower() {
    window.addEventListener("mousemove" , function(dets){
      document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    });
}

circleMouseFollower();


document.querySelectorAll(".elem").forEach(function(elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function(dets) {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: 'power3',
            duration: 0.5,
        });
    });



    elem.addEventListener("mousemove", function(dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.utils.clamp(-20,20, diff);
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: 'power3',
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
    });
});
