<?php

function get_average(array $a) {
  $count = 0;
  foreach ($a as $num) {
    $count += $num;
  }
  return floor($count / count($a));
}

echo get_average([1, 2, 3]);