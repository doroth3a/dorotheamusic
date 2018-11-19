<script>
    (function(w,d,t,u){
        var a=d.createElement(t);a.async=1;a.src=u+"?url="+escape(w.location.href);
        var s=d.getElementsByTagName(t)[0]; s.parentNode.insertBefore(a,s);
    })(window, document, 'script', 'https://a.ad.gt/api/v1/u/matches/13')
  </script>

<script>
						// define images
						var images = [
							"/images/flower1.gif",
							"/images/flower2.gif",
							"/images/flower3.gif",
							"/images/flower4.gif",
							"/images/flower5.gif",
							"/images/flower6.gif",
							"/images/flower7.gif",
                            "/images/flower8.gif",
                            "/images/flower9.gif",
                            "/images/flower10.gif",
                            "/images/flower11.gif",
                            "/images/flower12.gif",
                            "/images/flower13.gif",
                            "/images/flower13.gif",
						];

						// TweenMax can tween any property of any object. We use this object to cycle through the array
						var obj = {curImg: 0};

						// create tween
						var tween = TweenMax.to(obj, 0.5,
							{
								curImg: images.length - 1,	// animate propery curImg to number of images
								roundProps: "curImg",				// only integers so it can be used as an array index
								repeat: 0,									// repeat 3 times
								immediateRender: true,			// load first image automatically
								ease: Linear.easeNone,			// show every image the same ammount of time
								onUpdate: function () {
								  $("#myimg").attr("src", images[obj.curImg]); // set the image source
								}
							}
						);

						// init controller
						var controller = new ScrollMagic.Controller();

						// build scene
						var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300})
										.setTween(tween)
										.addIndicators() // add indicators (requires plugin)
										.addTo(controller);

						// handle form change
						$("form.move input[name=duration]:radio").change(function () {
							scene.duration($(this).val());
						});
					</script>
				</section>
				<div class="spacer s_viewport"></div>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="../../assets/js/tracking.js"></script>          
      