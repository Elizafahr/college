<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Profiles;

class Users extends Model
{
    public function thumbnail()
    {
        return $this->hasOne(Profiles::class);
    }
    use HasFactory;
}
