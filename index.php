<!doctype html>

<html>
<head>
    <title>Draft App</title>
    <meta charset="utf-8">
    <style> 
        * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
        }
        .header {
            width: 100%;
            line-height: 200px;
            border-bottom: 1px solid #cccccc;
            text-align: center;
        }
        .body {
            color: blue;
        }
    </style>
</head>

<body>
    <div class="header">Header</div>
    <div class="body">Body</div>
    <?php

        function printMovieData($data) {
            for ($i = 0; $i < count ($data); $i++) { 
                echo $data[$i]['title'];
            }
        }

        $serverData = [
            ['title' => 'movie 1'],
            ['title' => 'movie 2'],
            ['title' => 'movie 3'],
            ['title' => 'movie 4'],
            ['title' => 'movie 5'],
            ['title' => 'movie 6'],
            ['title' => 'movie 7'],
            ['title' => 'movie 8'],
            ['title' => 'movie 9'],
            ['title' => 'movie 10']
        ];

        printMovieData($serverData);
    ?>
</body>


</html>