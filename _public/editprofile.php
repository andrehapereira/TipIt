<!DOCTYPE html>
<html>
<head>
<?php include 'includes/imports.html' ?>
<script src="script/api_editprofile.js"></script>
<script src="script/check_cookies.js"></script>
</head>
<body>
  <?php include 'includes/header.php' ?>
  <div class="container-fluid edge jumbotron">
    <div class="row">
      <div class="col-lg-2 col-sm-1"></div>
      <div class="col-lg-8 col-sm-10">
        <p>Description: </p>
        <textarea id="desc" style="width:100%; resize:none;" rows="10" placeholder="Tell something about you..."></textarea>
      </div>
    <div class="col-lg-2 col-sm-1"></div>
    </div>
    <div class="row" style="text-align:center;">
      <div class="col-xs-1 col-lg-2 col-sm-1"></div>
      <div class="col-xs-5 col-lg-4 col-sm-5">
        <button type="button" class="btn btn-success" onClick="save()">Save</button>
      </div>
      <div class="col-xs-5 col-lg-4 col-sm-5">
        <button type="button" class="btn btn-danger" onclick="goBack()">Cancel</button>
      </div>
      <div class="col-xs-1 col-lg-2 col-sm-1"></div>
    </div>
  </div>
<?php include 'includes/footer.html' ?>
</body>
</html>
