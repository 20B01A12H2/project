import React from 'react';
import './homepage.css'; 
import I2 from './Images/I2.jpg';
import I6 from './Images/I6.jpg';
import I5 from './Images/I5.jpg';
import I1 from './Images/I1.jpg';
import icon1 from './Images/icon-1.png';
import icon2 from './Images/icon-2.png';
import icon3 from './Images/icon-3.png';
import icon4 from './Images/icon-4.png';

import product1 from './Products/product1.jpg';
import product2 from './Products/product2.jpg';
import product3 from './Products/product3.jpg';
import product4 from './Products/product4.jpg';
import product5 from './Products/product5.jpg';
import product6 from './Products/product6.jpg';
import product7 from './Products/product7.jpg';
import product8 from './Products/product8.jpg';
import product9 from './Products/product9.jpg';
import product10 from './Products/product10.jpg';
import indoor from './Products/Indoor.jpg';
import medicinal from './Products/Medicinal.jpg';
import fruits from './Products/fruits.jpg';
import flowers from './Products/flowers.jpg';
import bonsai from './Images/bonsai.jpg';
import cactus from './Images/cactus.jpg';
import religious from './Images/Religious.jpg';

import blog1 from './Images/blog1.jpg';
import blog2 from './Images/blog2.jpg';

import videomp4 from './Videos/video.mp4';

const App = () => {
  return (
    <div>
      <header>
			<div class="navbar">
				<div class="title">
					<a href="Homepage.html">Plants Nursery</a>
				</div>
				<nav>
					<ul>
						<li><a href="Homepage.html">Home</a></li>
						<li><a href="Shop.html">Shop</a></li>
						<li><a href="Handover.html">Handover</a></li>
						<li><a href="Products/add2cart.php"><i class="fa fa-shopping-cart fa-lg"></i></a></li>
						<li><a href="logout.php">Logout</a></li>
					</ul>
				</nav>
			</div>
		</header>
		<br/>
		<div class="imgslider">
			<div class="banner1">
				<img src={I2} height="500"/>
			</div>
			<div class="banner2">
				<img src={I6} height="500"/>
			</div>
			<div class="banner3">
				<img src={I5} height="500"/>
			</div>
			<div class="banner4">
				<img src={I1} height="500"/>
			</div>
		</div>
		<br/><br/><br/><br/>
		<div class="icons-container">
      		<div class="icons">
      			<img src={icon1}/>
      			<div class="info">
      				<h3>Free Delivery</h3>
      				<span>On All Orders</span>
      			</div>
      			<img src={icon2}/>
      			<div class="info">
      				<h3>Reasonable Prices</h3>
      				<span>On All Plants</span>
      			</div>
      			<img src={icon3}/>
      			<div class="info">
      				<h3>Discount & Offers</h3>
      				<span>On All Orders</span>
      			</div>
      			<img src={icon4}/>
      			<div class="info">
      				<h3>Secure payment</h3>
      				<span>Different methods to pay</span>
      			</div>
      		</div>
      	</div>
      	<br/>
      	<div class="Trending-title">
			<b>Trending</b>
		</div>
      	<div class="Trending">
         	<div class="products">
         		<a href="Products/product1.php">
	            <div class="img">
	               <img src={product1}/>
	            </div>
	            <div class="content">
	            	<h6><del>&#8377; 968</del></h6>
	            	<h3>&#8377; 699</h3>
	            	<h4><a href="Products/product1.php">Top 4 Die Hard Succulents Pack</a></h4>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star-half-o"></i>
            	</div>
            	</a>
         	</div>
	        <div class="products">
	        	<a href="Products/product2.php">
	            <div class="img">
	               <img src={product2}/>
	            </div>
	            <div class="content">
	            	<h6><del>&#8377; 1,193</del></h6>
	            	<h3>&#8377; 799</h3>
	            	<h4><a href="Products/product2.php">Set of 3 Outdoor Flowering Plants</a></h4>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star-o"></i>
	            </div>
	            </a>
	        </div>
	        <div class="products">
	        	<a href="Products/product3.php">
	            <div class="img">
	               <img src={product3}/>
	            </div>
	            <div class="content">
	            	<h6><del>&#8377; 1,204</del></h6>
	            	<h3>&#8377; 849</h3>
	            	<h4><a href="Products/product3.php">Top 4 Plants For Healthy Homes</a></h4>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star-half-o"></i>
	            </div>
	            </a>
	        </div>
	        <div class="products">
	        	<a href="Products/product4.php">
	            <div class="img">
	               <img src={product4}/>
	            </div>
	            <div class="content">
	            	<h6><del>&#8377; 1,356</del></h6>
	            	<h3>&#8377; 949</h3>
	            	<h4><a href="Products/product4.php">Best 4 plants to Kill Indoor Pollution</a></h4>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star-half-o"></i>
					<i class="fa fa-star-o"></i>
	            </div>
	            </a>
	        </div>
	        <div class="products">
	        	<a href="Products/product5.php">
	            <div class="img">
	               <img src={product5}/>
	            </div>
	            <div class="content">
	            	<h6><del>&#8377; 1,491</del></h6>
	            	<h3>&#8377; 999</h3>
	            	<h4><a href="Products/product5.php">Special 4 Plants Pack</a></h4>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star-o"></i>
	            </div>
	            </a>
	        </div>
	    </div>
      	<br/>
      	<div class="cat-title">
			<b>Categories</b>
		</div>
		<div class="Categories">
         	<div class="card">
	            <div class="img">
	               <a href="Indoor.html"><img src={indoor}/></a>
	            </div>
	            <div class="content">
	            	<a href="Indoor.html">Indoor</a> 
            	</div>
         	</div>
	        <div class="card">
	            <div class="img">
	               <a href="Medicinal.html"><img src={medicinal}/></a>
	            </div>
	            <div class="content">
	            	<a href="Medicinal.html">Medicinal</a>
	            </div>
	        </div>
	        <div class="card">
	            <div class="img">
	               <a href="Fruits.html"><img src={fruits}/></a>
	            </div>
	            <div class="content">
	            	<a href="Fruits.html">Fruits</a>
	            </div>
	        </div>
	        <div class="card">
	            <div class="img">
	               <a href="Flowers.html"><img src={flowers}/></a>
	            </div>
	            <div class="content">
	            	<a href="Flowers.html">Flowers</a>
	            </div>
	        </div>
	        <div class="card">
	            <div class="img">
	               <a href="Bonsai.html"><img src={bonsai}/></a>
	            </div>
	            <div class="content">
	            	<a href="Bonsai.html">Bonsai</a>
	          	</div>
         	</div>
	        <div class="card">
	            <div class="img">
	               <a href="Cactus.html"><img src={cactus}/></a>
	            </div>
	            <div class="content">
	            	<a href="Cactus.html">Cactus</a>
	            </div>
	        </div>
	        <div class="card">
	            <div class="img">
	               <a href="Religious.html"><img src={religious}/></a>
	            </div>
	            <div class="content">
	            	<a href="Religious.html">Religious</a>
	            </div>
	        </div>
      	</div>
      	<br/>
      	<div class="selling-title">
			<b>Best Selling Products</b>
		</div>
      	<div class="selling">
         	<div class="products">
         		<a href="Products/product6.php">
	            <div class="img">
	               <img src={product6}/>
	            </div>
	            <div class="content">
	            	<h6><del>&#8377; 1,514</del></h6>
	            	<h3>&#8377; 999</h3>
	            	<h4><a href="Products/product6.php">Special 4 Plants Pack</a></h4>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star-half-o"></i>
            	</div>
            	</a>
         	</div>
	        <div class="products">
	        	<a href="Products/product7.php">
	            <div class="img">
	               <img src={product7}/>
	            </div>
	            <div class="content">
	            	<h6><del>&#8377; 1,640</del></h6>
	            	<h3>&#8377; 1,099</h3>
	            	<h4><a href="Products/product7.php">Plant Pack For Healthy Home</a></h4>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star-o"></i>
	            </div>
	            </a>
	        </div>
	        <div class="products">
	        	<a href="Products/product8.php">
	            <div class="img">
	               <img src={product8}/>
	            </div>
	            <div class="content">
	            	<h6><del>&#8377; 1,452</del></h6>
	            	<h3>&#8377; 999</h3>
	            	<h4><a href="Products/product8.php">Mini Succulent Garden</a></h4>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star-half-o"></i>
	            </div>
	            </a>
	        </div>
	        <div class="products">
	        	<a href="Products/product9.php">
	            <div class="img">
	               <img src={product9}/>
	            </div>
	            <div class="content">
	            	<h6><del>&#8377; 1,641</del></h6>
	            	<h3>&#8377; 1,149</h3>
	            	<h4><a href="Products/product9.php">Set of 5 Beautiful Dianthus Plants</a></h4>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star-half-o"></i>
					<i class="fa fa-star-o"></i>
	            </div>
	            </a>
	        </div>
	        <div class="products">
	        	<a href="Products/product10.php">
	            <div class="img">
	               <img src={product10}/>
	            </div>
	            <div class="content">
	            	<h6><del>&#8377; 1,715</del></h6>
	            	<h3>&#8377; 1,149</h3>
	            	<h4><a href="Products/product10.php">Beautiful Flowers of the Season</a></h4>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star-o"></i>
	            </div>
	            </a>
	        </div>
	    </div>
      	<br/>
      	<div class="blog-title">
			<b>Blogs</b>
		</div>
      	<div class="Blogs">
	      	<div class="blog">
	      		<div class="blog-img">
	      			<a href="blog1.html"><img src={blog1}/></a>
	      		</div>
	      		<div class="blog-content">
	      			<h6>10 August 2021 | Rithik Swargam</h6>
	      			<h5><a href="blog1.html">Why we should be Thankful of every Single Tree ?</a></h5>
	      			<p>A single tree can take in an entire stadium worth of carbon dioxide from the air, reduces surrounding temperature up to 4 degrees, provide a home to a dozen birds and gives us oxygen for free.
	      			Planting a tree is one of the easiest and most powerful things you can do to have a positive impact on the environment.</p><br/>
	      			<a href="blog1.html"><button class="card-btn">Visit &rarr;</button></a>
	      		</div>
	      	</div>
	      	<div class="blog">
	      		<div class="blog-img">
	      			<a href="blog2.html"><img src={blog2}/></a>
	      		</div>
	      		<div class="blog-content">
	      			<h6>20 August 2021 | Rithik Swargam</h6>
	      			<h5><a href="blog2.html">Here are Best Plant Gifts for upcoming Festive Season !</a></h5>
	      			<p>In India, festivals happen every other day. It is a land of celebrations, where gifting is a norm and highly anticipated. But do we really know what to get for every occasion? If you don't have any, plants are a terrific gift to give someone straight immediately to make their lips curl into a smile.
	      			</p><br/>
	      			<a href="blog2.html"><button class="card-btn">Visit &rarr;</button></a>
	      		</div>
	      	</div>
	      	<div class="blog">
	      		<div class="blog-img">
	      			<a href="blog3.html"><img src="blog3.webp"/></a>
	      		</div>
	      		<div class="blog-content">
	      			<h6>30 August 2021 | Rithik Swargam</h6>
	      			<h5><a href="blog3.html">Go eco-friendly this Ganesh Utsav and have a Positive Impact !</a></h5>
	      			<p>Every year with enormous apprehension we commemorate the festival of Ganesh Chaturthi. The celebration signifies the cycle of birth, life, and death. Lord Ganesha, who is also known as the lord of new beginnings, is also worshiped as the remover of obstacles.</p><br/><br/>
	      			<a href="blog3.html"><button class="card-btn">Visit &rarr;</button></a>
	      		</div>
	      	</div>
	    </div>
	    <br/>
	    <div class="v-container">
			<video autoplay loop muted width="1000">
				<source src={videomp4} type="video/mp4" width="500"/>
			</video>
			<div class="text-box">
				<h1>PLANTS<br/>NURSERY</h1>
			</div>
		</div>
		<br/>
	    <div class="video">
	    	<p>Here is A Video About How to Take Care of Plants !</p>
	    	<iframe width="1292" height="489" src="https://www.youtube.com/embed/LZhnCxG5c6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	    </div>
	    <br/>
		<footer>
			<div class="BackToTop"><center><a href="App.js"> BACK TO TOP </a></center></div>
			<div class="main-content">
				<div class="left box">
					<h2>About us</h2>
					<div class="content">
						<p>My Name is Rithik Swargam.</p>
						<p>Currently studying in TYIT from Jai Hind College.</p>
						<p>This is My TYIT Project - A Plants Nursery Website.</p>
						<p>I created this website to encourage more green plants in our environment. Because nowadays, Technology is overtaking almost everything it is not a bad thing but it effects Nature. So that's why plant or buy more green plants as possible.</p>
						<br/>
						<p>More Green Plants - Better Environment To Live.</p>
						<div class="social">
							<a href="http://facebook.com/" target="_blank"><span class="fa fa-facebook"></span></a>
							<a href="http://twitter.com" target="_blank"><span class="fa fa-twitter"></span></a>
							<a href="http://instagram.com/1rithik1" target="_blank"><span class="fa fa-instagram"></span></a>
							<a href="http://linkedin.com" target="_blank"><span class="fa fa-linkedin"></span></a>
						</div>
					</div>
				</div>
				<div class="center box">
					<h2>Address</h2>
					<div class="content">
						<div class="place">
							<span class="fa fa-map-marker">&nbsp;</span>
							<span class="text"> Worli, Mumbai, Maharashtra, India </span>
						</div>
						<br/>
						<div class="phone">
							<span class="fa fa-phone">&nbsp;</span>
							<span class="text"> +91 9004565911 </span>
						</div>
						<br/>
						<div class="email">
							<span class="fa fa-envelope">&nbsp;</span>
							<span class="text"> swargam.rithik.19bit052@gmail.com </span>
						</div>
						<div class="downtitle">
							Plants Nursery
						</div>
					</div>
				</div>
				<div class="right box">
					<h2>Contact us</h2>
					<div class="content">
						<form action="ContactUs.php" method="POST">
              <div class="email">
								<div class="text">Email:</div>
								<input type="email" name="email" required />
							</div>
							<br/>
							<div class="msg">
								<div class="text">Message:</div>
								<textarea rows="3" cols="25"name="msg" required></textarea>
							</div>
							<br/>
							<div class="btn">
								<button>Send</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div class="bottom">
				<center>
					<span class="credit">Created By Rithik Swargam</span>
					<span class="fa fa-copyright"></span><span> 2021 All rights reserved.</span>
				</center>
			</div>
		</footer>
    </div>
  );
}

export default App;
