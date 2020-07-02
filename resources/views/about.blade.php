@extends('layouts.app')

@section('content')
    <about-page inline-template>
        <div>
            <h1 @click="log('title-click')">{{ $title }}</h1>
            <h1>@{{ title }}</h1>
        </div>
    </about-page>
@endsection
