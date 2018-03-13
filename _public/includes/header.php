<div id="header">
    <div class="logo"><a href="index.php"><img src="./images/logo.png"></a></div>

    <div id="nav">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link" href="tippers.php">Tippers</a>
        </li>
      </ul>
    </div>

    <div class="searchbar">
      <form action="#">
          <input type="text" placeholder="Search.." name="search" class="inptSearch">
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
    </div>
    <div class="logreg">
      <?php
      session_start();
      require_once __DIR__ . '/src/Facebook/autoload.php'; // download official fb sdk for php @ https://github.com/facebook/php-graph-sdk
      $fb = new Facebook\Facebook([
        'app_id' => '961717537326510',
        'app_secret' => '13afc18ac579ba50ef62519a199f2e0e',
        'default_graph_version' => 'v2.12',
        ]);
      $helper = $fb->getRedirectLoginHelper();
      $permissions = ['email']; // optional

      try {
      	if (isset($_SESSION['facebook_access_token'])) {
      		$accessToken = $_SESSION['facebook_access_token'];
      	} else {
        		$accessToken = $helper->getAccessToken();
      	}
      } catch(Facebook\Exceptions\FacebookResponseException $e) {
       	// When Graph returns an error
       	echo 'Graph returned an error: ' . $e->getMessage();
        	exit;
      } catch(Facebook\Exceptions\FacebookSDKException $e) {
       	// When validation fails or other local issues
      	echo 'Facebook SDK returned an error: ' . $e->getMessage();
        	exit;
       }
      if (isset($accessToken)) {
      	if (isset($_SESSION['facebook_access_token'])) {
      		$fb->setDefaultAccessToken($_SESSION['facebook_access_token']);
      	} else {
      		// getting short-lived access token
      		$_SESSION['facebook_access_token'] = (string) $accessToken;
      	  	// OAuth 2.0 client handler
      		$oAuth2Client = $fb->getOAuth2Client();
      		// Exchanges a short-lived access token for a long-lived one
      		$longLivedAccessToken = $oAuth2Client->getLongLivedAccessToken($_SESSION['facebook_access_token']);
      		$_SESSION['facebook_access_token'] = (string) $longLivedAccessToken;
      		// setting default access token to be used in script
      		$fb->setDefaultAccessToken($_SESSION['facebook_access_token']);
      	}
      	// redirect the user back to the same page if it has "code" GET variable
      	if (isset($_GET['code'])) {
      		header('Location: ./');
      	}
      	// getting basic info about user
      	try {
      		$profile_request = $fb->get('/me?fields=name,first_name,last_name,email,picture');
      		$profile = $profile_request->getGraphUser();
      	} catch(Facebook\Exceptions\FacebookResponseException $e) {
      		// When Graph returns an error
      		echo 'Graph returned an error: ' . $e->getMessage();
      		session_destroy();
    		// redirecting user back to app login page
      		header("Location: ./");
      		exit;
      	} catch(Facebook\Exceptions\FacebookSDKException $e) {
      		// When validation fails or other local issues
      		echo 'Facebook SDK returned an error: ' . $e->getMessage();
      		exit;
      	}

      	// printing $profile array on the screen which holds the basic info about user
        $pic = $profile->getPicture();
        $_SESSION['user'] = $profile['id'];
        $_SESSION['profilePic'] = $pic['url'];
        $_SESSION['mail'] = $profile['email'];
        echo $profile['name'];
        echo '<a href="#" class="btn btn-primary" style="margin-left:2%;">My Profile</a>';
        echo '<a href="logout.php" class="btn btn-danger" style="margin-left:2%;">Log Out</a>';
        echo ('<div style="display:none;" id="fbuser">' );
        echo($_SESSION['user']);
        echo ('</div>');
        echo ('<div style="display:none;" id="fbpic">' );
        echo($_SESSION['profilePic']);
        echo ('</div>');
        echo ('<div style="display:none;" id="fbmail">' );
        echo($_SESSION['mail']);
        echo ('</div>');
        echo '<script src="./includes/check_reg.js"></script>';

        // Now you can redirect to another page and use the access token from $_SESSION['facebook_access_token']
      } else {
      	// replace your website URL same as added in the developers.facebook.com/apps e.g. if you used http instead of https and you used non-www version or www version of your website then you must add the same here
      	$loginUrl = $helper->getLoginUrl('http://tipit.com/public/', $permissions);
      	echo '<a href="' . $loginUrl . '" class="btn btn-primary">Log in with Facebook!</a>';
      }
?>
    <!--  <button type="button" class="btn btn-primary">Login With Facebook</button> -->
      <!--<button type="button" class="btn">Register</button>-->
    </div>

</div>
