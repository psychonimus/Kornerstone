let t1 = gsap.timeline();

t1.from('.main', {
    y:100,
    duration:1,
    opacity:0
},'a')

t1.from('.main-para', {
    y:100,
    duration:1,
    opacity:0
},'a')

t1.from('.readBtn', {
    y:100,
    duration:1,
    opacity:0
},'a')

t1.to('.vision', {
    scrollTrigger : {
        trigger : '.visionMission',
        start : '0% 80%',
        end : 'bottom 50%',
        scrub : 1,
        // markers : true,
    
    },
    rotation : 45+180,
    duration : 0.5,
  

},'b')
t1.to('.mission', {
    scrollTrigger : {
        trigger : '.visionMission',
        start : '0% 80%',
        end : 'bottom 50%',
        scrub : 1,
        // markers : true,
    
    },
    rotation : 45+180,
    duration : 0.5,
  

},'b')

t1.from('.flip-card-front', {
    scrollTrigger : {
        trigger : '.tile2',
        start : '10% 100%',
        end : 'bottom 70%',
        scrub : 1,
        // markers : true,
    },
    scale : 0.5,
    duration : 0.5,
    opacity : 0

})
t1.from('.OA', {
    scrollTrigger : {
        trigger : '.OA',
        start : '10% 100%',
        end : 'bottom 70%',
        scrub : 1,
        // markers : true,
    },
    scale : 0.8,
    y: 50,
    duration : 0.2,
    opacity : 0.7

}, 'c')

t1.from('.AF', {
    scrollTrigger : {
        trigger : '.AF',
        start : '10% 100%',
        end : 'bottom 70%',
        scrub : 1,
        // markers : true,
    },
    scale : 0.8,
    y: 50,
    duration : 0.2,
    opacity : 0.7

}, 'c')

t1.from('.leftQuote', {
    scrollTrigger : {
        trigger : '.AF',
        start : '10% 100%',
        end : 'bottom 70%',
        scrub : 1,
        // markers : true,
    },
    scale : 0.8,
    y: 50,
    x : 100,
    duration : 0.2,
    opacity : 0.7

}, 'c')

t1.from('.rightQuote', {
    scrollTrigger : {
        trigger : '.AF',
        start : '10% 100%',
        end : 'bottom 70%',
        scrub : 1,
        // markers : true,
    },
    scale : 0.8,
    y: 50,
    x:-100,
    duration : 0.2,
    opacity : 0.7

}, 'c')

t1.from('.centerimage',{
    scrollTrigger : {
        trigger : '.bgBlackDiv',
        start : '10% 100%',
        end : '50% 70%',
        scrub : 2,
        // markers : true,
    },
    scale : 0,
    duration : 0.2,
    opacity : 0.7
})



const swiper = new Swiper('.sample-slider', {
    loop: true,
    autoplay: {
        delay: 0,
    },
    speed: 3000,          //add
    slidesPerView: 5,     //add
})

