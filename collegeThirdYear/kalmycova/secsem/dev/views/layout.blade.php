<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstdap@4.3.1/dist/css/bootstdap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

</head>

<body>
    {{-- <table border="1">
        <thead>
            <td>id</td>
            <td>title</td>
            <td>desc</td>
            <td>text</td>
            <td>date</td>
        </thead>
        @foreach ($users as $users)
            <td>
                <td> {{ $users->id }}</td>
                <td> {{ $users->title }}</td>
                <td> {{ $users->desc }}</td>
                <td> {{ $users->text }}</td>
                <td> {{ $users->date }}</td>
            </td>
        @endforeach
    </table> --}}

    @if (session('message'))
        <script>
            alert("{{ session('messageDel') }}");
        </script>
    @endif
    {{-- <a href="/users/del/:{{ $users->id }}">{{ $users->id }}</a> --}}
    <table border="1">
        <thead>
            <td>id</td>
            <td>name</td>
            <td>surname</td>
            <td>login</td>
            <td>password</td>
            <td>users_id</td>
        </thead>
        <tr>
            <td>{{ $users->id }}</td>
            <td>{{ $users->profiles->name }}</td>
            <td>{{ $users->profiles->surname }}</td>
            <td>{{ $users->login }}</td>
            <td>{{ $users->password }}</td>
            <td>{{ $users->profiles->users_id }}</td>
        </tr>
    </table>
    {{-- @foreach ($users as $users)
        <div class="row g-0   rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col-5 p-4 d-flex flex-column position-static">

                <a href="/users/del/:{{ $users->id }}">{{ $users->id }}</a>

            </div>

        </div>
    @endforeach --}}

</body>


</html>
