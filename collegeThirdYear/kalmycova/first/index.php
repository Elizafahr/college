<?php

$month = 12;

if ($month >= 3 && $month <= 11) {
    echo "Весна";
} else if ($month > 11 || $month < 3) {
    echo "Зима";
} else {
    echo "Осень";
}
