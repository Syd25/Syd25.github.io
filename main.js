document.addEventListener("DOMContentLoaded", function() {

    var circleProgress = (function(selector) {
      var wrapper = document.querySelectorAll(selector);
      Array.prototype.forEach.call(wrapper, function(wrapper, i) {
        var wrapperWidth,
          wrapperHeight,
          percent,
          innerHTML,
          context,
          lineWidth,
          centerX,
          centerY,
          radius,
          newPercent,
          speed,
          from,
          to,
          duration,
          start,
          strokeStyle,
          text;
  
        var getValues = function() {
          wrapperWidth = parseInt(window.getComputedStyle(wrapper).width);
          wrapperHeight = wrapperWidth;
          percent = wrapper.getAttribute('data-cp-percentage');
          innerHTML = '<span class="percentage"><strong>' + percent + '</strong> %</span><canvas class="circleProgressCanvas" width="' + (wrapperWidth * 2) + '" height="' + wrapperHeight * 2 + '"></canvas>';
          wrapper.innerHTML = innerHTML;
          text = wrapper.querySelector(".percentage");
          canvas = wrapper.querySelector(".circleProgressCanvas");
          wrapper.style.height = canvas.style.width = canvas.style.height = wrapperWidth + "px";
          context = canvas.getContext('2d');
          centerX = canvas.width / 2;
          centerY = canvas.height / 2;
          newPercent = 0;
          speed = 1;
          from = 0;
          to = percent;
          duration = 5000;
          lineWidth = 25;
          radius = canvas.width / 2 - lineWidth;
          strokeStyle = wrapper.getAttribute('data-cp-color');
          start = new Date().getTime();
        };
  
        function animate() {
          requestAnimationFrame(animate);
          var time = new Date().getTime() - start;
          if (time <= duration) {
            var x = easeInOutQuart(time, from, to - from, duration);
            newPercent = x;
            text.innerHTML = Math.round(newPercent) + " %";
            drawArc();
          }
        }
  
        function drawArc() {
          var circleStart = 1.5 * Math.PI;
          var circleEnd = circleStart + (newPercent / 50) * Math.PI;
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.beginPath();
          context.arc(centerX, centerY, radius, circleStart, 4 * Math.PI, false);
          context.lineWidth = lineWidth;
          context.strokeStyle = "#ddd";
          context.stroke();
          context.beginPath();
          context.arc(centerX, centerY, radius, circleStart, circleEnd, false);
          context.lineWidth = lineWidth;
          context.strokeStyle = strokeStyle;
          context.stroke();
  
        }
        var update = function() {
          getValues();
          animate();
        }
        update();
  
        var btnUpdate = document.querySelectorAll(".btn-update")[0];
        btnUpdate.addEventListener("click", function() {
          wrapper.setAttribute("data-cp-percentage", Math.round(getRandom(5, 95)));
          update();
        });
        wrapper.addEventListener("click", function() {
          update();
        });
  
        var resizeTimer;
        window.addEventListener("resize", function() {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(function() {
            clearTimeout(resizeTimer);
            start = new Date().getTime();
            update();
          }, 250);
        });
      });
  
      //
      // http://easings.net/#easeInOutQuart
      //  t: current time
      //  b: beginning value
      //  c: change in value
      //  d: duration
      //
      function easeInOutQuart(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
      }
  
    });
  
    circleProgress('.counter');
  
    // Gibt eine Zufallszahl zwischen min (inklusive) und max (exklusive) zurück
    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }
  });



  var quotes = [
    "'Chimichangas!'",
    "'SHORYUKEN'",
    "'A Poc-key-Lips. I think I found my new favorite word'",
    "'Ah, go web your zipper closed'",
    "'My common sense is tingling'"

    ]
    
    
    
    function quoteGen() {
        var i = Math.floor((Math.random() * quotes.length));
        document.getElementById("quoteBox").innerHTML = quotes[i];
    }
    function tweetQuote() {
        var textToTweet = document.getElementById('quoteBox').innerHTML + 'Created using the Deadpool Quote Generator created by @MattTheWebDev';
        console.log(textToTweet);
        var twtLink ='https://twitter.com/home?status=' +encodeURIComponent(textToTweet);
        window.open(twtLink,'_blank');
    }



    window.onload = () => {
        const navMenu = document.querySelector('.nav-menu');
        const navItems = document.querySelectorAll('.nav-item');
        const hamburger = document.querySelector('.nav-toggle');
        
        const toggle = e => e.classList.toggle('is-active');
        const toggleNav = ({ target }) => Array.from(navMenu.classList).includes('is-active') ? toggle(navMenu) : null;
      
        hamburger.addEventListener('click', () => toggle(navMenu, 'is-active'));
        Array.from(navItems).forEach(e => e.addEventListener('click', toggleNav));
      }


    
      $(document).ready(function() { 
        
        var id ='#dialog';
      
        //Get the screen height and width
      
        var maskHeight = $(document).height();
      
        var maskWidth = $(window).width();
     
        //Set heigth and width to mask to fill up the whole screen
        
        $('#mask').css({'width':maskWidth,'height':maskHeight});
        
         
      
        //transition effect
        
        $('#mask').fadeIn(500);
       
        $('#mask').fadeTo("slow",0.9); 
        
        //Get the window height and width
        
        var winH = $(window).height();
        
        var winW = $(window).width();
      
        //Set the popup window to center
      
        $(id).css('top',  winH/2-$(id).height()/2);
      
        $(id).css('left', winW/2-$(id).width()/2);
       
        //transition effect
      
        $(id).fadeIn(2000);  
       
        //if close button is clicked
        
        $('.window .close').click(function (e) {
      
        //Cancel the link behavior
       
        e.preventDefault();
      
        $('#mask').hide();
        
        $('.window').hide();
        
        });
        
        //if mask is clicked
      
        $('#mask').click(function () {
       
        $(this).hide();
       
        $('.window').hide();
       
        });
      
        });
        
      /*const loginPopup=document.getElementsByName("login-popup");

      window.addEventListener("load",function(){
          showPopup();
      })

      function showPopup(){
          const timeLimit=5;
          let i=0;
          const timer=setInterval(function(){
           i++;
           if(i==timeLimit){
               clearInterval(timer);
               loginPopup.classList.add("show");
           }
           console.log(i);
          },1000);
      }*/
