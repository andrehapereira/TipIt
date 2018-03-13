<!DOCTYPE html>
<html>
<head>
<?php include 'includes/imports.html' ?>
<script src="script/api_addtip.js"></script>
</head>
<body>
  <?php include 'includes/header.html' ?>
  <div class="container-fluid edge jumbotron">
    <div class="row">
      <div class="col-lg-2 col-sm-1"></div>
      <div class="col-lg-4 col-sm-5">
      <p>  Basic Description: </p>
        <input style="width:100%;" type="text" id="basicDesc" placeholder="What is your tip about?"/>
      </div>
      <div class="col-lg-4 col-sm-5">
      <p>  Price: </p>
        <input style="width:100%;" type="number" id="price" placeholder="Tip price?"/>
      </div>
      <div class="col-lg-2 col-sm-1"></div>
    </div>
    <div class="row">
      <div class="col-lg-2 col-sm-1"></div>
      <div class="col-lg-8 col-sm-10">
        <p>  Full Description: </p>
        <textarea id="fullDesc" style="width:100%; resize:none;" rows="10" placeholder="Please, talk about your tip. Explain it. Where is it? What to expect? Best outfit for it. Everything usefull for that tip. Make sure to give a good information..."></textarea>
      </div>
    <div class="col-lg-2 col-sm-1"></div>
    </div>
    <div class="row" style="text-align:center;">
      <div class="col-lg-2 col-sm-1"></div>
      <div class="col-lg-4 col-sm-5">
        <button type="button" class="btn btn-success" onClick="save()">Save</button>
      </div>
      <div class="col-lg-4 col-sm-5">
        <button type="button" class="btn btn-danger" onclick="goBack()">Cancel</button>
      </div>
      <div class="col-lg-2 col-sm-1"></div>
    </div>
  </div>
<?php include 'includes/footer.html' ?>
</body>
</html>
