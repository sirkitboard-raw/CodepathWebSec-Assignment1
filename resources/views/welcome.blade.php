<html>
	<head>
		<!-- Compiled and minified CSS -->
		<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css"/>
		<link rel="stylesheet" href="/css/style.css"/>
	    <script type="text/javascript">
            window.data = {!! json_encode($data) !!}
        </script>
	</head>
	<body>
		<div id="content">
		</div>
		<!-- Compiled and minified JavaScript -->
		<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js"></script>
		<script src="/js/bower_components/requirejs/require.js"></script>
		<script type="text/javascript">
			require(['/js/config.js'], function() {
				require(['init']);
			})
		</script>
	</body>
</html>
