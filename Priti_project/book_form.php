<?php
$conn = mysqli_connect("localhost", "root", "", "book_db"); // Replace "your_database_name" with your actual database name

if (isset($_POST['send'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $location = $_POST['location'];
    $guests = $_POST['guests'];
    $arrivals = $_POST['arrivals'];
    $leaving = $_POST['leaving'];

    $request = "INSERT INTO book_form (name, email, phone, address, location, guests, arrivals, leaving) 
                VALUES ('$name', '$email', '$phone', '$address', '$location', '$guests', '$arrivals', '$leaving')";

    mysqli_query($conn, $request);

    header("Location: book.php");
    exit();
} else {
    echo 'Something went wrong. Please try again.';
}
?>