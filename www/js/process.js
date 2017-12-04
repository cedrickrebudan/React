let process = {
  menu:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Gym WorkOut</div>
              </div>
            </div>

        <div className="list-group">
      <ul>
        <li className="list-group-title"></li>
        <li><a href='#' onClick={process.shoulder}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Shoulder</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.back}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Back</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.legs}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Legs</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
                <li><a href='#' onClick={process.triceps}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Triceps</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
              <li><a href='#' onClick={process.bicep}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Biceps</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
                        <li><a href='#' onClick={process.forearm}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Forearm</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
                                <li><a href='#' onClick={process.abs}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Abs</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
      </ul>
    </div>
        

</div>
</div>
</div>
</div>
</div>;
    ReactDOM.render(content,document.getElementById('root'));
  },

shoulder:function(){
    let content = <div className="page">
<div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Gym WorkOut</div>
              </div>
            </div>
            <center><img src={"img/shoulder.gif"}/>
            <p>This is an occasional first movement, but it can easily go anywhere from first to third in your routine. Keep in mind, though, that the later you do this movement, the less weight you'll likely be able to push.

</p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  back:function(){
    let content = <div className="page">
<div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Gym WorkOut</div>
              </div>
            </div>
            <center><img src={"img/back.gif"}/>
            <p>This is technically more than back exercise. It hits the entire posterioir chain from your calves to your upper traps.

</p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  legs:function(){
    let content = <div className="page">
<div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Gym WorkOut</div>
              </div>
            </div>
            <center><img src={"img/legs.gif"}/>
            <p> As with deadlifts, proper form is crucial to get the most out of your squats. One of the most common mistakes while squatting is letting the knees extend over the toe, which causes strain on the knee joints and tendons.

</p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
},  
triceps:function(){
  let content = <div className="page">
<div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Gym WorkOut</div>
              </div>
            </div>
            <center><img src={"img/triceps.gif"}/>
            <p>Lower dumbbell behind neck or shoulder while maintaining upper arm's vertical position throughout exercise. Extend arm until straight.
</p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  bicep:function(){
  let content = <div className="page">
<div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Gym WorkOut</div>
              </div>
            </div>
            <center><img src={"img/bicep.gif"}/>
            <p>Allow your arms to hang straight down, then curl them up so that the dumbbells touch your shoulders.Remember, use the hammer grip palms facing in throughout lift.

</p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  
  forearm:function(){
  let content = <div className="page">
<div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Gym WorkOut</div>
              </div>
            </div>
            <center><img src={"img/forearm.gif"}/>
            <p>Make sure to keep your feet on the floor. Use your arms to grab both of the dumbbells and bring them up so that your foreamrs are resting against your thighs with the palms of the hand facing up.

</p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
    abs:function(){
  let content = <div className="page">
<div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Gym WorkOut</div>
              </div>
            </div>
            <center><img src={"img/abs.gif"}/>
            <p>Curl ups. Lie on your back with your arms crossed over your chest, keeping your knees slightly bent. Raise your upper body off the floor by flexing your abdominal , muscles.

</p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },

  loading:function(){
    let content = <div>
          Loading...
        </div>;
    ReactDOM.render(content,document.getElementById('root'));
  }
}


process.loading();
setTimeout(function(){
  process.menu();
},3000);
