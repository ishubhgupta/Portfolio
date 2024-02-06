<?php
// Database connection (replace with your actual database credentials)
$db_host = "localhost";
$db_user = "root";
$db_password = "123456";
$db_name = "user_data";

$conn = mysqli_connect($db_host, $db_user, $db_password, $db_name);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Retrieve the most recent blog along with the title and content
$get_recent_blog_sql = "SELECT id, username, title, content FROM blogs ORDER BY submission_date DESC LIMIT 1";
$recent_blog_result = mysqli_query($conn, $get_recent_blog_sql);
$recent_blog = mysqli_fetch_assoc($recent_blog_result);

// Retrieve the titles of the last ten blogs (excluding the most recent one)
$get_last_ten_blogs_sql = "SELECT id, username, title FROM blogs WHERE id != {$recent_blog['id']} ORDER BY submission_date DESC LIMIT 10";
$last_ten_blogs_result = mysqli_query($conn, $get_last_ten_blogs_sql);
$last_ten_blogs = mysqli_fetch_all($last_ten_blogs_result, MYSQLI_ASSOC);

mysqli_close($conn);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="css/index.css"> 
    <link rel="icon" type="image/png" href="assets\images\shubhImage1.png" alt="evolkai">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shubh Gupta</title>
    <script src="index.js"></script>
    <script src="js/git.js"></script>
</head>
<body onload="loadContent('home')">
    <header class="header">
        <div class="header-left">
            <h1 class="headerName">Shubh Gupta</h1>
        </div>
        <div class="header-right">
            <nav class="social-links">
                <a href="https://github.com/ishubhgupta" target="_blank" class="bi bi-github" title="GitHub"></a>
                <a href="blog/index.php" target="_blank" class="bi bi-file-earmark-text" title="Blog"></a>
                <a href="https://twitter.com/ishubhguptaa" target="_blank" class="bi bi-twitter" title="Twitter"></a>
                <a href="https://instagram.com/ishubhgupta" target="_blank" class="bi bi-instagram" title="Instagram"></a>
                <a href="https://linkedin.com/in/ishubhgupta" target="_blank" class="bi bi-linkedin" title="LinkedIn"></a>
                <a href="mailto:shubhorai12@gmail.com" class="bi bi-envelope" title="Email"></a>
                <a href="#" class="recuriter-link" title="Recruiter?">Recruiter?</a>
                <a href="assets/docs/resume1.pdf" class="resume-link" download title="Download Resume">
                    Resume <span class="material-symbols-outlined"> Download </span>
                </a>
            </nav>
        </div>
    </header>
    <section class="content">
        <div class="left">
            <div class="above">
                <div class="profile-image">
                    <img src="assets/images/shubhImage4.jpg" alt="Profile Image">
                </div>
                <div class="name">
                    Shubh Gupta
                </div>
            </div>
            <div class="line"></div> <!-- White line between above and below divs -->
            <div class="below">
                <div class="nav-option" onclick="loadContent('home')">Home</div>
                <div class="nav-option" onclick="loadContent('intro')">Introduction</div>
                <div class="nav-option" onclick="loadContent('tech-stack')">Tech Stack</div>
                <div class="nav-option" onclick="loadContent('projects')">Projects</div>
                <div class="nav-option" onclick="loadContent('researchContribution')">Research Contribution</div>
                <div class="nav-option" onclick="loadContent('achivement')">Achivement</div>
                <div class="nav-option" onclick="loadContent('contact')">Contact</div>
            </div>
        </div>
        <div class="right" id="dynamic-content">
            <!-- Content will be loaded here -->
        </div>
    </section>

    <div id="home" style="display: none;"></div>
    <div id="intro" style="display: none;"></div>
    <div id="tech-stack" style="display: none;"></div>
    <div id="projects project-section-container" style="display: none;"></div>
    <div id="researchContribution" style="display: none;"></div>
    <div id="achivement" style="display: none;"></div>
    <div id="contact" class="contact" style="display: none;"></div>    
    


    <!-- github -->
    <section id="github-repos">
        <div class="carousel-container">
            <span class="heading">My GitHub Repositories</span>

            <div class="carousel">
                <span class="git-content">
                    <a href="https://github.com/ishubhgupta" target="_blank" class="bi bi-github" title="GitHub"></a>
                    <a href="https://ishubhgupta.github.io/data-structures"> Data Structures</a>
                    <span class="git-visibility">Public</span>
                </span>
                
                <hr>
                
                <div class="repo-description">
                    Hello this Repository is about Data Structure
                </div>

                <hr> 
                
                <div class="git-tech-stack">
                    <div class="tech-stack-left">Tech Stack:</div>
                    <div class="git-tech-container">
                        <div class="item">C++</div>
                        <div class="item">Problem Solving</div>
                    </div>
                </div>
            </div>
            
            <div class="carousel">
                <span class="git-content">
                    <a href="https://github.com/ishubhgupta" target="_blank" class="bi bi-github" title="GitHub"></a>
                    <a href="https://github.com/ishubhgupta/V-Rides"> V-Rides</a>
                    <span class="git-visibility">Public</span>
                </span>
                
                <hr>
                
                <div class="repo-description">
                    Hello this Repository is about Data Structure
                </div>

                <hr>


                <div class="git-tech-stack">
                    <div class="tech-stack-left">Tech-Stack:</div>
                    <div class="git-tech-container">
                        <div class="item">HTML</div>
                        <div class="item">CSS</div>
                        <div class="item">Javascript</div>
                        <div class="item">MySql</div>
                        <div class="item">PHP</div>
                        
                    </div>
                </div>
            </div>

            <div class="carousel">
                <span class="git-content">
                    <a href="https://github.com/ishubhgupta" target="_blank" class="bi bi-github" title="GitHub"></a>
                    <a href="https://github.com/ishubhgupta/Emotion-Detection" target="_blank"> Emotion-Detection</a>
                    <span class="git-visibility">Public</span>
                </span>
                
                <hr>
                
                <div class="repo-description">
                    Hello this Repository is about Emotion Detection
                </div>

                <hr>


                <div class="git-tech-stack">
                    <div class="tech-stack-left">Tech-Stack:</div>
                    <div class="git-tech-container">
                        <div class="item">HTML</div>
                        <div class="item">CSS</div>
                        <div class="item">Javascript</div>
                        <div class="item">PHP</div>
                        <div class="item">Python</div>
                        <div class="item">Jupyter</div>
                        <div class="item">CNN</div>
                        <div class="item">NumPy</div>
                        <div class="item">Pandas</div>
                    </div>
                </div>
            </div>

            <!-- copy this entire carousel to create new -->

        </div>
        <div class="controls">
            <button id="prevBtn" onclick="moveCarousel('left')">&#8249;</button>
            <button id="nextBtn" onclick="moveCarousel('right')">&#8250;</button>
        </div>
    </section>

    <section class="contact-section" id="contactSection">
        <button type="button" id="contactButton">Contact</button>
        <div id="contactContent" class="contact-content hidden">
            <div class="contact-options">
                <a href="https://github.com/ishubhgupta" target="_blank" class="bi bi-github" title="GitHub"></a>
                <a href="link-to-your-blog" target="_blank" class="bi bi-file-earmark-text" title="Blog"></a>
                <a href="https://twitter.com/ishubhguptaa" target="_blank" class="bi bi-twitter" title="Twitter"></a>
                <a href="https://instagram.com/ishubhgupta" target="_blank" class="bi bi-instagram" title="Instagram"></a>
                <a href="https://linkedin.com/in/ishubhgupta" target="_blank" class="bi bi-linkedin" title="LinkedIn"></a>
                <a href="mailto:shubhorai12@gmail.com" class="bi bi-envelope" title="Email"></a>
            </div>
        </div>
    </section>
    
    <section class="blog">
        <span class="heading">Blog's</span>
        <div class="most-recent-blog">
            <a href="blog.php?id=<?php echo $recent_blog["id"]; ?>">
            <h2><?php echo $recent_blog["title"]; ?></h2>
                <p><?php echo nl2br($recent_blog["content"]); ?></p>
                <p>by <?php echo $recent_blog["username"]; ?></p>
                </a>
        </div>
    </section>

        
    

</body>
</html>