const text = document.querySelector('section .animate_div');

const text_1 = () => {
    setTimeout(() => {
        text.textContent = "Software Engineer";
    }, 0)
    setTimeout(() => {
        text.textContent = "Web Developer";
    }, 4000)
    setTimeout(() => {
        text.textContent = "Designer";
    }, 8000)
};
text_1();
setInterval(text_1, 12000);

const face = document.querySelector('section .box .face');
const l_in = document.querySelector('section .box .linked-in');
const git = document.querySelector('section .box .github');

face.addEventListener('click', () => {
    location = 'https://www.facebook.com/';
})
l_in.addEventListener('click', () => {
    location = 'https://www.linkedin.com/in/hazem-nabil-4ab02b265/';
})
git.addEventListener('click', () => {
    location = 'https://github.com/Hazem-nabil42';
})

const btn = document.querySelector('.btn-2');
const target = document.querySelector('.target');

btn.addEventListener('click', () =>{
    target.scrollIntoView({behavior : "smooth"});
    //setInterval(btn, 12000);
});


/* -------------------------------------------------------------------------- */
/*                               Loading_screen                               */
/* -------------------------------------------------------------------------- */

const load = document.querySelector('#loading-screen')
const loading = () => {
    load.style.display = 'none';
  }
  
  // Show the loading screen when the page is loaded
  window.addEventListener('load', () => {
    setTimeout( () => {
      loading();
    }, 5000); // 5000 milliseconds (5 seconds) delay
  });


/* -------------------------------------------------------------------------- */
/*                               animated_rocket                              */
/* -------------------------------------------------------------------------- */

const rocket = document.querySelector('.CV img ');
const header = document.querySelector('header')

rocket.addEventListener('click', () => {
    header.scrollIntoView({behavior : "smooth"}); 
});

/* -------------------------------------------------------------------------- */
/*                             Animation Scrolling                            */
/* -------------------------------------------------------------------------- */

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
        else {
            entry.target.classList.remove('show')
        }
    });
})


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));