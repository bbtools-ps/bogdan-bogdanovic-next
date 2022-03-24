const MainContent = () => {
  return (
    <main>
      {/* <!-- *************** PROJECTS / PORTFOLIO *************** -->
  <section class="projects">
      <div class="content-wrap">
          <h2>Featured Projects</h2>
          <p>Check out my <a href="https://github.com/bbtools-ps/">Github</a> and <a
                  href="https://www.behance.net/bogdanbogdanovic" target="_blank">Behance</a>
              for more projects.</p>
          <section class="project-item">
              <h3><a href="https://bogdan-bogdanovic.com/food-ordering-app/" target="_blank">FoodHeaven - Food
                      Ordering App</a></h3>
              <a href="https://bogdan-bogdanovic.com/food-ordering-app/" target="_blank"><img
                      src="./images/food-heaven-350w.jpg" alt="FoodHeaven - Food Ordering App" srcset="./images/food-heaven-700w.jpg 700w,
                              ./images/food-heaven-350w.jpg 350w"
                      sizes="(max-width: 760px) 350px, 700px"></a>
              <div class="project-description">
                  <p>Small web application for ordering food. Some of the features: add meal to the Cart
                      (including amount), add/Remove meals from Cart, add additional item for each meal in the
                      Cart.</p>
                  <p>Technologies used:</p>
                  <ul>
                      <li>React.js</li>
                      <li>CSS</li>
                  </ul>
                  <a href="https://github.com/bbtools-ps/food-ordering-app" target="_blank" class="btn"><i
                          class="fas fa-code"></i> Source</a>
                  <a href="https://bogdan-bogdanovic.com/food-ordering-app/" target="_blank" class="btn"><i
                          class="fas fa-eye"></i> Live</a>
              </div>
          </section>
          <section class="project-item">
              <h3><a href="https://bogdan-bogdanovic.com/candidates-hr-platform" target="_blank">Candidates -
                      HR Assistance Platform</a></h3>
              <a href="https://bogdan-bogdanovic.com/candidates-hr-platform" target="_blank"><img
                      src="./images/shadow-350w.jpg" alt="Candidates - HR assistance platform" srcset="./images/candidates-700w.jpg 700w,
                          ./images/candidates-350w.jpg 350w" sizes="(max-width: 760px) 350px, 700px"></a>
              <div class="project-description">
                  <p>Small web application for every HR professional. Some of the features: search candidate
                      by name or by skill, add/remove/edit candidate, etc.</p>
                  <p>Technologies used:</p>
                  <ul>
                      <li>React.js</li>
                      <li>CSS</li>
                  </ul>
                  <a href="https://github.com/bbtools-ps/candidates-hr-platform" target="_blank"
                      class="btn"><i class="fas fa-code"></i> Source</a>
                  <a href="https://bogdan-bogdanovic.com/candidates-hr-platform" target="_blank"
                      class="btn"><i class="fas fa-eye"></i> Live</a>
              </div>
          </section>
          <section class="project-item">
              <h3><a href="https://www.bbtools.shop/shadow/" target="_blank">Shadow - Extension for
                      Photoshop</a></h3>
              <a href="https://www.bbtools.shop/shadow/" target="_blank"><img src="./images/shadow-350w.jpg"
                      alt="Shadow - Extension for Photoshop" srcset="./images/shadow-700w.jpg 700w,
                      ./images/shadow-350w.jpg 350w" sizes="(max-width: 760px) 350px, 700px"></a>
              <div class="project-description">
                  <p>Shadow is a Photoshop extension for adding realistic shadow for standing objects.</p>
                  <p>Technologies used:</p>
                  <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Javascript (Vue.js)</li>
                  </ul>
                  <a href="https://www.bbtools.shop/shadow/" target="_blank" class="btn"><i
                          class="fas fa-info-circle"></i> Info</a>
              </div>
          </section>
          <section class="project-item">
              <h3><a href="https://www.bbtools.shop/postproduction-master/" target="_blank">PostProduction
                      Master - Extension for Photoshop</a></h3>
              <a href="https://www.bbtools.shop/postproduction-master/" target="_blank"><img
                      src="./images/postproduction-master-350w.jpg"
                      alt="PostProduction Master - Extension for Photoshop" srcset="./images/postproduction-master-700w.jpg 700w,
                      ./images/postproduction-master-350w.jpg 350w"
                      sizes="(max-width: 760px) 350px, 700px"></a>
              <div class="project-description">
                  <p>PostProduction Master is the essential Arch Viz post-production extension for Photoshop.
                  </p>
                  <p>Technologies used:</p>
                  <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Javascript (Vue.js)</li>
                  </ul>
                  <a href="https://www.bbtools.shop/postproduction-master/" target="_blank" class="btn"><i
                          class="fas fa-info-circle"></i> Info</a>
              </div>
          </section>
          <section class="project-item">
              <h3><a href="https://www.behance.net/gallery/128744209/The-river" target="_blank">The river
                      (photography)</a></h3>
              <a href="https://www.behance.net/gallery/128744209/The-river" target="_blank"><img
                      src="./images/fishing-on-the-river-350w.jpg"
                      alt="Photograph of a man fishing on the river in the sunset" srcset="./images/fishing-on-the-river-700w.jpg 700w,
                      ./images/fishing-on-the-river-350w.jpg 350w"
                      sizes="(max-width: 760px) 350px, 700px"></a>
              <div class="project-description">
                  <p>Photograph of a man fishing on the river in the sunset.</p>
                  <p>Equipment used:</p>
                  <ul>
                      <li>Camera: Canon EOS 600D</li>
                      <li>Lens: Canon EF 70-200mm f/4L</li>
                      <li>Stand: Bilora Pro</li>
                  </ul>
                  <a href="https://www.behance.net/gallery/128744209/The-river" target="_blank" class="btn"><i
                          class="fas fa-info-circle"></i> Info</a>
              </div>
          </section>
      </div>
  </section>

  <!-- *************** WORK EXPERIENCE *************** -->
  <section class="work-experience">
      <div class="content-wrap item-details">
          <h2>Work Experience</h2>
          <p>Check out my <a href="https://www.linkedin.com/in/bogdanbogdanovic" target="_blank">Linkedin</a>
              to see complete
              work history.</p>

          <!-- Job 1 -->
          <section class="job-item">
              <div class="job-details">
                  <h3>Web Application Developer & Founder of BBTools</h3>
                  <p>BBTools, Novi Sad</p>
                  <p>January 2020 - Present</p>
              </div>
              <div class="job-summary">
                  <ul>
                      <li>Working with HTML, CSS, React.js, Vue.js, Node.js, BatchScript, MaxScript and
                          Vanilla JavaScript.
                      </li>
                      <li>Writing MaxScripts for 3ds Max.</li>
                      <li>Writing scripts and extensions (web applications) for Photoshop.</li>
                  </ul>
                  <a href="http://bbtools.shop/" target="_blank">bbtools.shop</a>
              </div>
          </section>

          <!-- Job 2 -->
          <section class="job-item">
              <div class="job-details">
                  <h3>CG Artist</h3>
                  <p>MAG Arhitektura, Novi Sad</p>
                  <p>November 2018 - Present</p>
              </div>
              <div class="job-summary">
                  <ul>
                      <li>Post-production for architectural renderings</li>
                      <li>Video editing, short video animations</li>
                      <li>Making scripts and extensions for Adobe Photoshop</li>
                      <li>UI design (for architectural products)</li>
                  </ul>
                  <a href="https://mag.archi/vizualization/" target="_blank">mag.archi</a>
              </div>
          </section>

          <!-- Job 3 -->
          <section class="job-item">
              <div class="job-details">
                  <h3>CG Artist</h3>
                  <p>Case 3D, Novi Sad</p>
                  <p>June 2006 - November 2018</p>
              </div>
              <div class="job-summary">
                  <ul>
                      <li>Post-production for renderings in architectural visualization</li>
                      <li>Green screen compositing and post-production in videos</li>
                      <li>Short video animations</li>
                      <li>Making scripts and extensions for Adobe Photoshop (HTML, CSS, JavaScript,
                          ExtendScript,
                          Vue.js, etc.)</li>
                  </ul>
                  <a href="https://www.case-3d.com/projects-all/location-all/" target="_blank">case-3d.com</a>
              </div>
          </section>

          <!-- Job 4 -->
          <section class="job-item">
              <div class="job-details">
                  <h3>Graphic Designer</h3>
                  <p>RT-RK, Novi Sad</p>
                  <p>February 2012 - September 2015</p>
              </div>
              <div class="job-summary">
                  <ul>
                      <li>Graphic Design (logos, brochures, business cards, catalogs, leaflets, booths)</li>
                      <li>Web design (creation and maintenance of static websites and websites in Joomla and
                          Wordpress)</li>
                      <li>UI Design (for applications that run on tablets and TV)</li>
                      <li>CGI (making still images in 3d software and short animations)</li>
                      <li>Video editing</li>
                      <li>Photography (product photography, people photography, events)</li>
                  </ul>
                  <a href="https://www.rt-rk.com/" target="_blank">rt-rk.com</a>
              </div>
          </section>
      </div>
  </section>

  <!-- *************** EDUCATION & CERTIFICATIONS *************** -->
  <section class="education">
      <div class="content-wrap item-details">
          <h2>Education</h2>
          <p>Check out my <a href="https://www.linkedin.com/in/bogdanbogdanovic" target="_blank">Linkedin</a>
              to see complete
              education.</p>
          <section>
              <h3>Faculty of Technical Sciences, Novi Sad, Serbia</h3>
              <p>MSc of Graphic Engineering and Design</p>
          </section>
          <section>
              <h3>SAE Institute, Belgrade, Serbia</h3>
              <p>Digital Video Production (course)</p>
          </section>
      </div>
  </section>

  <!-- *************** LANGUAGES *************** -->
  <section class="languages">
      <div class="content-wrap item-details">
          <h2>Languages</h2>
          <ul>
              <li>Serbian (native)</li>
              <li>Macedonian (native)</li>
              <li>English (fluent)</li>
          </ul>
      </div>
  </section> */}
    </main>
  );
};

export default MainContent;
