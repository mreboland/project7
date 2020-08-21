// Main

// code courtesy of https://www.w3schools.com/howto/howto_js_read_more.asp
// function myFunction() {
//     const dots = document.getElementById("dots");
//     const moreText = document.getElementById("more");
//     const btnText = document.getElementById("myBtn");

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }

// Resume

$(".resumeYear").on("click", function () {
    const year = $(this).html();

    const twentyNineteen = `
        <li>
            <div class="jobTitle">
                <div class="jobTitleSub">
                    <div class="jobSubImg">
                        <i class="fas fa-pencil-alt colouredText"></i>
                    </div>
                    <div>
                        <h3>Data Analyst</h3>
                        <p class="colouredText">RE/MAX</p>
                    </div>
                </div>
                <p class="lightText">Building a custom database based on the Toronto housing market</p>
            </div>
        </li>
        <li>
            <div class="jobTitle">
                <div class="jobTitleSub">
                    <div class="jobSubImg">
                        <i class="fas fa-pencil-alt colouredText"></i>
                    </div>
                    <div>
                        <h3>Operations Associate</h3>
                        <p class="colouredText">Focus Asset Management</p>
                    </div>
                </div>
                <p class="lightText">Managed the day to day operation of Pooled Funds</p>
            </div>
        </li>
    `;

    const twentyEighteen = `

        <li>
            <div class="jobTitle">
                <div class="jobTitleSub">
                    <div class="jobSubImg">
                        <i class="fas fa-pencil-alt colouredText"></i>
                    </div>
                    <div>
                        <h3>Operations Associate</h3>
                        <p class="colouredText">Focus Asset Management</p>
                    </div>
                </div>
                <p class="lightText">Managed the day to day operation of Pooled Funds</p>
            </div>
        </li>
        <li>
            <div class="jobTitle">
                <div class="jobTitleSub">
                    <div class="jobSubImg">
                        <i class="fas fa-pencil-alt colouredText"></i>
                    </div>
                    <div>
                        <h3>Specialty/Pricing Team</h3>
                        <p class="colouredText">IA Clarington</p>
                    </div>
                </div>
                <p class="lightText">Managed the day to day operation of Mutual Fund accounts</p>
            </div>
        </li>
    `;

    const twentySeventeen = `

        <li>
            <div class="jobTitle">
                <div class="jobTitleSub">
                    <div class="jobSubImg">
                        <i class="fas fa-pencil-alt colouredText"></i>
                    </div>
                    <div>
                        <h3>Specialty/Pricing Team</h3>
                        <p class="colouredText">IA Clarington</p>
                    </div>
                </div>
                <p class="lightText">Managed the day to day operation of Mutual Fund accounts</p>
            </div>
        </li>
    `;

    const twentySixteen = `

        <li>
            <div class="jobTitle">
                <div class="jobTitleSub">
                    <div class="jobSubImg">
                        <i class="fas fa-pencil-alt colouredText"></i>
                    </div>
                    <div>
                        <h3>Specialty/Pricing Team</h3>
                        <p class="colouredText">IA Clarington</p>
                    </div>
                </div>
                <p class="lightText">Managed the day to day operation of Mutual Fund accounts</p>
            </div>
        </li>
    `;

    const twentyFifteen = `

        <li>
            <div class="jobTitle">
                <div class="jobTitleSub">
                    <div class="jobSubImg">
                        <i class="fas fa-pencil-alt colouredText"></i>
                    </div>
                    <div>
                        <h3>Specialty/Pricing Team</h3>
                        <p class="colouredText">IA Clarington</p>
                    </div>
                </div>
                <p class="lightText">Managed the day to day operation of Mutual Fund accounts</p>
            </div>
        </li>
    `;

    const twentyFourteen = `

        <li>
            <div class="jobTitle">
                <div class="jobTitleSub">
                    <div class="jobSubImg">
                        <i class="fas fa-pencil-alt colouredText"></i>
                    </div>
                    <div>
                        <h3>Specialty/Pricing Team</h3>
                        <p class="colouredText">IA Clarington</p>
                    </div>
                </div>
                <p class="lightText">Managed the day to day operation of Mutual Fund accounts</p>
            </div>
        </li>
        <li>
            <div class="jobTitle">
                <div class="jobTitleSub">
                    <div class="jobSubImg">
                        <i class="fas fa-pencil-alt colouredText"></i>
                    </div>
                    <div>
                        <h3>Real Estate Admin/Tech Support</h3>
                        <p class="colouredText">Coldwell Case Realty</p>
                    </div>
                </div>
                <p class="lightText">Managed the day to day operation of realtor clients need. Tech support for the office.</p>
            </div>
        </li>
    `;



    $(".roles").empty()

    if (year === "2019") {
        $(".roles").append(twentyNineteen);
        $(this).toggleClass("colouredText")
        $(".colourHighlightOne").toggleClass("colourHighlightShow")

        if ($(".yearTwo").hasClass("colouredText")) {
            $(".yearTwo").toggleClass("colouredText");
            $(".colourHighlightTwo").toggleClass("colourHighlightShow");
        } else if ($(".yearThree").hasClass("colouredText")) {
            $(".yearThree").toggleClass("colouredText");
            $(".colourHighlightThree").toggleClass("colourHighlightShow");
        } else if ($(".yearFour").hasClass("colouredText")) {
            $(".yearFour").toggleClass("colouredText");
            $(".colourHighlightFour").toggleClass("colourHighlightShow");
        } else if ($(".yearFive").hasClass("colouredText")) {
            $(".yearFive").toggleClass("colouredText");
            $(".colourHighlightFive").toggleClass("colourHighlightShow");
        } else if ($(".yearSix").hasClass("colouredText")) {
            $(".yearSix").toggleClass("colouredText");
            $(".colourHighlightSix").toggleClass("colourHighlightShow");
        }
    } else if (year === "2018") {
        $(".roles").append(twentyEighteen);
        $(this).toggleClass("colouredText")
        $(".colourHighlightTwo").toggleClass("colourHighlightShow")

        if ($(".yearOne").hasClass("colouredText")) {
            $(".yearOne").toggleClass("colouredText");
            $(".colourHighlightOne").toggleClass("colourHighlightShow");
        } else if ($(".yearThree").hasClass("colouredText")) {
            $(".yearThree").toggleClass("colouredText");
            $(".colourHighlightThree").toggleClass("colourHighlightShow");
        } else if ($(".yearFour").hasClass("colouredText")) {
            $(".yearFour").toggleClass("colouredText");
            $(".colourHighlightFour").toggleClass("colourHighlightShow");
        } else if ($(".yearFive").hasClass("colouredText")) {
            $(".yearFive").toggleClass("colouredText");
            $(".colourHighlightFive").toggleClass("colourHighlightShow");
        } else if ($(".yearSix").hasClass("colouredText")) {
            $(".yearSix").toggleClass("colouredText");
            $(".colourHighlightSix").toggleClass("colourHighlightShow");
        }
    } else if (year === "2017") {
        $(".roles").append(twentySeventeen);
        $(this).toggleClass("colouredText")
        $(".colourHighlightThree").toggleClass("colourHighlightShow")

        if ($(".yearOne").hasClass("colouredText")) {
            $(".yearOne").toggleClass("colouredText");
            $(".colourHighlightOne").toggleClass("colourHighlightShow");
        } else if ($(".yearTwo").hasClass("colouredText")) {
            $(".yearTwo").toggleClass("colouredText");
            $(".colourHighlightTwo").toggleClass("colourHighlightShow");
        } else if ($(".yearFour").hasClass("colouredText")) {
            $(".yearFour").toggleClass("colouredText");
            $(".colourHighlightFour").toggleClass("colourHighlightShow");
        } else if ($(".yearFive").hasClass("colouredText")) {
            $(".yearFive").toggleClass("colouredText");
            $(".colourHighlightFive").toggleClass("colourHighlightShow");
        } else if ($(".yearSix").hasClass("colouredText")) {
            $(".yearSix").toggleClass("colouredText");
            $(".colourHighlightSix").toggleClass("colourHighlightShow");
        }
    } else if (year === "2016") {
        $(".roles").append(twentySixteen);
        $(this).toggleClass("colouredText")
        $(".colourHighlightFour").toggleClass("colourHighlightShow")

        if ($(".yearOne").hasClass("colouredText")) {
            $(".yearOne").toggleClass("colouredText");
            $(".colourHighlightOne").toggleClass("colourHighlightShow");
        } else if ($(".yearTwo").hasClass("colouredText")) {
            $(".yearTwo").toggleClass("colouredText");
            $(".colourHighlightTwo").toggleClass("colourHighlightShow");
        } else if ($(".yearThree").hasClass("colouredText")) {
            $(".yearThree").toggleClass("colouredText");
            $(".colourHighlightThree").toggleClass("colourHighlightShow");
        } else if ($(".yearFive").hasClass("colouredText")) {
            $(".yearFive").toggleClass("colouredText");
            $(".colourHighlightFive").toggleClass("colourHighlightShow");
        } else if ($(".yearSix").hasClass("colouredText")) {
            $(".yearSix").toggleClass("colouredText");
            $(".colourHighlightSix").toggleClass("colourHighlightShow");
        }
    } else if (year === "2015") {
        $(".roles").append(twentyFifteen);
        $(this).toggleClass("colouredText")
        $(".colourHighlightFive").toggleClass("colourHighlightShow")

        if ($(".yearOne").hasClass("colouredText")) {
            $(".yearOne").toggleClass("colouredText");
            $(".colourHighlightOne").toggleClass("colourHighlightShow");
        } else if ($(".yearTwo").hasClass("colouredText")) {
            $(".yearTwo").toggleClass("colouredText");
            $(".colourHighlightTwo").toggleClass("colourHighlightShow");
        } else if ($(".yearThree").hasClass("colouredText")) {
            $(".yearThree").toggleClass("colouredText");
            $(".colourHighlightThree").toggleClass("colourHighlightShow");
        } else if ($(".yearFour").hasClass("colouredText")) {
            $(".yearFour").toggleClass("colouredText");
            $(".colourHighlightFour").toggleClass("colourHighlightShow");
        } else if ($(".yearSix").hasClass("colouredText")) {
            $(".yearSix").toggleClass("colouredText");
            $(".colourHighlightSix").toggleClass("colourHighlightShow");
        }
    } else if (year === "2014") {
        $(".roles").append(twentyFourteen);
        $(this).toggleClass("colouredText")
        $(".colourHighlightSix").toggleClass("colourHighlightShow")

        if ($(".yearOne").hasClass("colouredText")) {
            $(".yearOne").toggleClass("colouredText");
            $(".colourHighlightOne").toggleClass("colourHighlightShow");
        } else if ($(".yearTwo").hasClass("colouredText")) {
            $(".yearTwo").toggleClass("colouredText");
            $(".colourHighlightTwo").toggleClass("colourHighlightShow");
        } else if ($(".yearThree").hasClass("colouredText")) {
            $(".yearThree").toggleClass("colouredText");
            $(".colourHighlightThree").toggleClass("colourHighlightShow");
        } else if ($(".yearFour").hasClass("colouredText")) {
            $(".yearFour").toggleClass("colouredText");
            $(".colourHighlightFour").toggleClass("colourHighlightShow");
        } else if ($(".yearFive").hasClass("colouredText")) {
            $(".yearFive").toggleClass("colouredText");
            $(".colourHighlightFive").toggleClass("colourHighlightShow");
        }
    }

})

// Portfolio


$(".projectType").on("click", function () {

    const project = $(this).html();
    console.log(project);

const all = `
    <ul>
        <li class="project1">
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_001.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeTop">
                    <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_002.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_003.png" alt=""> -->
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_004.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_005.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_006.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_007.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_008.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_009.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_010.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_011.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_012.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_013.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_014.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_015.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_016.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeBottom">
                    <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_017.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_018.png" alt=""> -->
                </div>
            </div>
            
            <a class="portfolioToLive" target="_blank" href="https://mreboland.github.io/edward-boland-project-one/">
                +
            </a>

            <div class="portfolioDetails">
                <div>
                    <h2>Bikerland <a target="_blank" href="https://github.com/mreboland/edward-boland-project-one"><i class="fab fa-github"></i></a></h2>
                    <p>HTML, CSS</p>
                </div>
            </div>
        </li>

                                                        <!-- PROJECT 2 -->

        <li class="project2">
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_001.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeTop">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_002.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_003.png" alt=""> -->
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_004.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_005.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_006.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_007.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_008.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_009.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_010.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_011.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_012.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_013.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_014.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_015.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_016.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeBottom">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_017.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_018.png" alt=""> -->
                </div>
            </div>

            <a class="portfolioToLive" target="_blank" href="https://mreboland.github.io/edward-boland-project-two/">
                +
            </a>

            <div class="portfolioDetails">
                <div>
                    <h2>Sunshine <a target="_blank" href="https://github.com/mreboland/edward-boland-project-two"><i class="fab fa-github"></i></a></h2>
                    <p>HTML, CSS</p>
                </div>
            </div>
        </li>

                                                        <!-- PROJECT 3 -->

        <li class="project3">
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_001.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeTop">
                    <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_002.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_003.png" alt=""> -->
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_004.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_005.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_006.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_007.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_008.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_009.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_010.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_011.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_012.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_013.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_014.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_015.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_016.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeBottom">
                    <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_017.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_018.png" alt=""> -->
                </div>
            </div>

            <a class="portfolioToLive" target="_blank" href="https://mreboland.github.io/edwardBolandProjectThree/">
                +                          
            </a>

            <div class="portfolioDetails">
                <div>
                    <h2>Balloon Pop! <a target="_blank" href="https://github.com/mreboland/edwardBolandProjectThree"><i class="fab fa-github"></i></a></h2>
                    <p>HTML, CSS, JS</p>
                </div>
            </div>
            
        </li>

                                                        <!-- PROJECT 4 -->

        <li class="project4">
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_001.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeTop">
                    <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_002.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_003.png" alt=""> -->
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_004.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_005.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_006.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_007.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_008.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_009.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_010.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_011.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_012.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_013.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_014.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_015.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_016.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeBottom">
                    <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_017.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_018.png" alt=""> -->
                </div>
            </div>

            <a class="portfolioToLive" target="_blank" href="https://edward-vincci-project04.github.io/travelBuddy/">
                +                          
            </a>

            <div class="portfolioDetails">
                <div>
                    <h2>Travel Buddy <a target="_blank" href="https://github.com/edward-vincci-project04/travelBuddy"><i class="fab fa-github"></i></a></h2>
                    <p>HTML, CSS, JS</p>
                </div>
            </div>
            
        </li>

                                                        <!-- PROJECT 5 -->

        <li class="project5">
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_001.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeTop">
                    <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_002.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_003.png" alt=""> -->
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_004.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_005.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_006.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_007.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_008.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_009.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_010.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_011.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_012.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_013.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_014.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_015.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_016.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeBottom">
                    <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_017.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_018.png" alt=""> -->
                </div>
            </div>

            <a class="portfolioToLive" target="_blank" href="https://mreboland.github.io/project5/">
                +                         
            </a>

            <div class="portfolioDetails">
                <div>
                    <h2>Taste Finder <a target="_blank" href="https://github.com/mreboland/project5"><i
                            class="fab fa-github"></i></a></h2>
                    <p>HTML, CSS, JS, React</p>
                </div>
            </div>
            
        </li>

                                                        <!-- PROJECT 6 -->

        <li class="project6">
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_001.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeTop">
                    <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_002.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_003.png" alt=""> -->
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_004.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_005.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_006.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_007.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_008.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_009.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_010.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_011.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_012.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_013.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_014.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_015.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_016.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeBottom">
                    <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_017.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_018.png" alt=""> -->
                </div>
            </div>

            <a class="portfolioToLive" target="_blank" href="https://edwardmaxmarieanna.github.io/frontEndDeveloperComingSoon/">                            
                +
            </a>

            <div class="portfolioDetails">
                <div>
                    <h2>Future Developer <a target="_blank" href="https://github.com/EdwardMaxMarieAnna/frontEndDeveloperComingSoon"><i class="fab fa-github"></i></a></h2>
                    <p>HTML, CSS, JS, React</p>
                    
                </div>
            </div>
        </li>

                                                <!-- PROJECT 2  REACT-->
        
        <li class="project2React">
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_001.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeTop">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_002.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_003.png" alt=""> -->
                </div>
            </div>
        
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_004.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_005.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_006.png" alt="">
                </div>
            </div>
        
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_007.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_008.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_009.png" alt="">
                </div>
            </div>
        
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_010.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_011.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_012.png" alt="">
                </div>
            </div>
        
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_013.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_014.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_015.png" alt="">
                </div>
            </div>
        
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_016.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeBottom">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_017.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_018.png" alt=""> -->
                </div>
            </div>
        
            <a class="portfolioToLive" target="_blank" href="https://mreboland.github.io/project2React/">
                +
            </a>
        
            <div class="portfolioDetails">
                <div>
                    <h2>Sunshine <a target="_blank" href="https://github.com/mreboland/project2React"><i
                                class="fab fa-github"></i></a></h2>
                    <p>HTML, CSS, React</p>
                </div>
            </div>
        </li>

    </ul>
`

const html = `

    <ul class="portGalSelect">
        <li class="project1">
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_001.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeTop">
                    <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_002.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_003.png" alt=""> -->
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_004.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_005.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_006.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_007.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_008.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_009.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_010.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_011.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_012.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_013.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_014.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_015.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_016.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeBottom">
                    <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_017.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project1/cut_images_jt3k9TUoVJy/image_part_018.png" alt=""> -->
                </div>
            </div>
            
            <a class="portfolioToLive" target="_blank" href="https://mreboland.github.io/edward-boland-project-one/">
                +
            </a>

            <div class="portfolioDetails">
                <div>
                    <h2>Bikerland <a target="_blank" href="https://github.com/mreboland/edward-boland-project-one"><i class="fab fa-github"></i></a></h2>
                    <p>HTML, CSS</p>
                </div>
            </div>
        </li>

                                                        <!-- PROJECT 2 -->

        <li class="project2">
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_001.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeTop">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_002.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_003.png" alt=""> -->
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_004.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_005.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_006.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_007.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_008.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_009.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_010.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_011.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_012.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_013.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_014.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_015.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_016.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeBottom">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_017.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_018.png" alt=""> -->
                </div>
            </div>

            <a class="portfolioToLive" target="_blank" href="https://mreboland.github.io/edward-boland-project-two/">
                +
            </a>

            <div class="portfolioDetails">
                <div>
                    <h2>Sunshine <a target="_blank" href="https://github.com/mreboland/edward-boland-project-two"><i class="fab fa-github"></i></a></h2>
                    <p>HTML, CSS</p>
                </div>
            </div>
        </li>
    </ul>
`

const js = `
    <ul class="portGalSelect">
        <li class="project3">
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_001.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeTop">
                    <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_002.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_003.png" alt=""> -->
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_004.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_005.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_006.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_007.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_008.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_009.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_010.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_011.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_012.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_013.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_014.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_015.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_016.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeBottom">
                    <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_017.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project3/cut_images_jOkt4fyAGPFw09u/image_part_018.png" alt=""> -->
                </div>
            </div>

            <a class="portfolioToLive" target="_blank" href="https://mreboland.github.io/edwardBolandProjectThree/">
                +                          
            </a>

            <div class="portfolioDetails">
                <div>
                    <h2>Balloon Pop! <a target="_blank" href="https://github.com/mreboland/edwardBolandProjectThree"><i class="fab fa-github"></i></a></h2>
                    <p>HTML, CSS, JS</p>
                </div>
            </div>
            
        </li>
    

                                                    <!-- PROJECT 4 -->

        <li class="project4">
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_001.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeTop">
                    <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_002.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_003.png" alt=""> -->
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_004.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_005.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_006.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_007.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_008.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_009.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_010.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_011.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_012.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_013.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_014.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_015.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_016.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeBottom">
                    <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_017.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project4/cut_images_cgw01B0hBaoE0/image_part_018.png" alt=""> -->
                </div>
            </div>

            <a class="portfolioToLive" target="_blank" href="https://edward-vincci-project04.github.io/travelBuddy/">
                +                          
            </a>

            <div class="portfolioDetails">
                <div>
                    <h2>Travel Buddy <a target="_blank" href="https://github.com/edward-vincci-project04/travelBuddy"><i class="fab fa-github"></i></a></h2>
                    <p>HTML, CSS, JS</p>
                </div>
            </div>
            
        </li>
    </ul>
`

const react = `
    <ul class="portGalSelect">
        <li class="project5">
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_001.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeTop">
                    <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_002.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_003.png" alt=""> -->
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_004.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_005.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_006.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_007.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_008.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_009.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_010.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_011.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_012.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_013.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_014.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_015.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_016.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeBottom">
                    <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_017.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project5/cut_images_Pp39faveFA/image_part_018.png" alt=""> -->
                </div>
            </div>

            <a class="portfolioToLive" target="_blank" href="https://mreboland.github.io/project5/">
                +                         
            </a>

            <div class="portfolioDetails">
                <div>
                    <h2>Taste Finder <a target="_blank" href="https://github.com/mreboland/project5"><i
                            class="fab fa-github"></i></a></h2>
                    <p>HTML, CSS, JS, React</p>
                </div>
            </div>
            
        </li>

                                                        <!-- PROJECT 6 -->

        <li class="project6">
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_001.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeTop">
                    <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_002.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_003.png" alt=""> -->
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_004.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_005.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_006.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_007.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_008.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_009.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_010.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_011.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_012.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_013.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_014.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_015.png" alt="">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_016.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeBottom">
                    <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_017.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project6/cut_images_oHVkrMYXEZ9I8pKM/image_part_018.png" alt=""> -->
                </div>
            </div>

            <a class="portfolioToLive" target="_blank" href="https://edwardmaxmarieanna.github.io/frontEndDeveloperComingSoon/">                            
                +
            </a>

            <div class="portfolioDetails">
                <div>
                    <h2>Future Developer <a target="_blank" href="https://github.com/EdwardMaxMarieAnna/frontEndDeveloperComingSoon"><i class="fab fa-github"></i></a></h2>
                    <p>HTML, CSS, JS, React</p>
                    
                </div>
            </div>
        </li>

        <!-- PROJECT 2  REACT-->
        
        <li class="project2React">
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_001.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeTop">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_002.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_003.png" alt=""> -->
                </div>
            </div>
        
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_004.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_005.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_006.png" alt="">
                </div>
            </div>
        
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_007.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_008.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_009.png" alt="">
                </div>
            </div>
        
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_010.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_011.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_012.png" alt="">
                </div>
            </div>
        
            <div class="row">
                <div class="col-md-4 genPadding orangeLeft">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_013.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_014.png" alt="">
                </div>
                <div class="col-md-4 genPadding orangeRight">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_015.png" alt="">
                </div>
            </div>
        
            <div class="row">
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_016.png" alt=""> -->
                </div>
                <div class="col-md-4 genPadding orangeBottom">
                    <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_017.png" alt="">
                </div>
                <div class="col-md-4 genPadding">
                    <!-- <img src="./assets/gridPhotos/project2/cut_images_cCb5EQVnNyZ9fl/image_part_018.png" alt=""> -->
                </div>
            </div>
        
            <a class="portfolioToLive" target="_blank" href="https://mreboland.github.io/project2React/">
                +
            </a>
        
            <div class="portfolioDetails">
                <div>
                    <h2>Sunshine <a target="_blank" href="https://github.com/mreboland/project2React"><i
                                class="fab fa-github"></i></a></h2>
                    <p>HTML, CSS, React</p>
                </div>
            </div>
        </li>
    </ul>

`

    $(".portfolioGallery").empty()

    if (project === "All") {
        $(".portfolioGallery").append(all);
        $(this).toggleClass("colouredText")
        $(".colourHighlightOne").toggleClass("colourHighlightShow")

        if ($(".html").hasClass("colouredText")) {
            $(".html").toggleClass("colouredText");
            $(".colourHighlightTwo").toggleClass("colourHighlightShow");
        } else if ($(".js").hasClass("colouredText")) {
            $(".js").toggleClass("colouredText");
            $(".colourHighlightThree").toggleClass("colourHighlightShow");
        } else if ($(".react").hasClass("colouredText")) {
            $(".react").toggleClass("colouredText");
            $(".colourHighlightFour").toggleClass("colourHighlightShow");
        }
    } else if (project === "HTML/CSS(SASS)") {
        $(".portfolioGallery").append(html);
        $(this).toggleClass("colouredText")
        $(".colourHighlightTwo").toggleClass("colourHighlightShow")

        if ($(".all").hasClass("colouredText")) {
            $(".all").toggleClass("colouredText");
            $(".colourHighlightOne").toggleClass("colourHighlightShow");
        } else if ($(".js").hasClass("colouredText")) {
            $(".js").toggleClass("colouredText");
            $(".colourHighlightThree").toggleClass("colourHighlightShow");
        } else if ($(".react").hasClass("colouredText")) {
            $(".react").toggleClass("colouredText");
            $(".colourHighlightFour").toggleClass("colourHighlightShow");
        }
    } else if (project === "JavaScript") {
        $(".portfolioGallery").append(js);
        $(this).toggleClass("colouredText")
        $(".colourHighlightThree").toggleClass("colourHighlightShow")

        if ($(".all").hasClass("colouredText")) {
            $(".all").toggleClass("colouredText");
            $(".colourHighlightOne").toggleClass("colourHighlightShow");
        } else if ($(".html").hasClass("colouredText")) {
            $(".html").toggleClass("colouredText");
            $(".colourHighlightTwo").toggleClass("colourHighlightShow");
        } else if ($(".react").hasClass("colouredText")) {
            $(".react").toggleClass("colouredText");
            $(".colourHighlightFour").toggleClass("colourHighlightShow");
        }
    } else if (project === "React") {
        $(".portfolioGallery").append(react);
        $(this).toggleClass("colouredText")
        $(".colourHighlightFour").toggleClass("colourHighlightShow")

        if ($(".all").hasClass("colouredText")) {
            $(".all").toggleClass("colouredText");
            $(".colourHighlightOne").toggleClass("colourHighlightShow");
        } else if ($(".html").hasClass("colouredText")) {
            $(".html").toggleClass("colouredText");
            $(".colourHighlightTwo").toggleClass("colourHighlightShow");
        } else if ($(".js").hasClass("colouredText")) {
            $(".js").toggleClass("colouredText");
            $(".colourHighlightThree").toggleClass("colourHighlightShow");
        }
    }



})


























//Contact Me

// let message = "";

// $("#sendMessage").on("click", function () {
//     message = $("#contactForm").serialize();
//     $.ajax({
//         url: "https://formspree.io/xyynkjnj",
//         method: "POST",
//         data: { message: message },
//         dataType: "json"
//     });
//     alert('Thanks for the email, we\'ll be in touch promptly.');
//     return false;
// });