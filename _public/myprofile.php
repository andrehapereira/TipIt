<!DOCTYPE html>
<html>
<head>
<?php include 'includes/imports.html' ?>
<script src="script/api_myprofile.js"></script>
</head>
<body>
  <?php include 'includes/header.html' ?>
  <div class="container-fluid edge jumbotron">
    <div class="row">
      <div class="col-lg-12 col-sm-12">
        <div id="userName"></div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-2 col-sm-1"></div>
      <div class="col-lg-3 col-sm-3">
        <div id="userPic"></div>
      </div>
      <div class="col-lg-5 col-sm-7">
        <div id="profileDesc"></div>
    </div>
    <div class="col-lg-2 col-sm-1"></div>
    </div>
    <div class="row">
      <div class="sectionTitle">TIPS: </div>
      <div class="col-lg-2 col-sm-1"></div>

      <div class="col-lg-8 col-sm-10">
        <div id="userTips"></div>
      </div>
      <div class="col-lg-2 col-sm-1"></div>
    </div>
    <div class="row">
      <div class="col-lg-12 col-sm-12">
        <div id="reportUser"></div>
      </div>
    </div>
  </div>
<?php include 'includes/footer.html' ?>
</body>
</html>
