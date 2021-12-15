$(document).ready(function () {
    $(document).on('click', '[data-role="add"]', function (e) {
        e.preventDefault();
        var container = $('.form-inline > .gh-headers')[0];
        new_field_group = $(container).clone();
        new_field_group.find('input').each(function () {
            $(this).val('');
        });
        $(container).after(new_field_group);
    });

    $(document).on('click', '[data-role="dynamic-fields"] > .form-inline [data-role="remove"]', function (e) {
        e.preventDefault();
        $(this).closest('.gh-headers').remove();
    });

    $('#swaggerForm').submit(function (event) {
        // Stop form from submitting normally
        event.preventDefault();

        // Get some values from elements on the page:
        var apiServiceUrl = $('#apiServiceUrl').val();
        var specUrl = $('#specificationUrl').val();
        var basePath = $('#basePath').val();

        var headers = {};
        $('.headers').each(function () {
            var name = $(this).children('.name').val();
            var value = $(this).children('.value').val();
            headers[[name]] = value;
        });

        var data = {
            type: 'swagger',
            data: {
                serviceUrl: apiServiceUrl,
                specUrl: specUrl,
                basePath: basePath,
            },
        };

        // Send the data using post
        $.ajax({
            type: 'POST',
            url: '/reqover/config',
            dataType: 'json',
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify(data),
            success: function (data) {
                window.location.href = '/reqover/swagger/report';
            },
            error: function (xhr, status, error) {
                $('#validationFeedback').text(xhr.responseJSON.error);
                $('#validationFeedback').show();
            },
        });
    });

    $('#swaggerForm').submit(function (event) {
        // Stop form from submitting normally
        event.preventDefault();

        // Get some values from elements on the page:
        var apiServiceUrl = $('#apiServiceUrl').val();
        var specUrl = $('#specificationUrl').val();
        var basePath = $('#basePath').val();
        var projectId = $('#project.id').val();

        var headers = {};
        $('.headers').each(function () {
            var name = $(this).children('.name').val();
            var value = $(this).children('.value').val();
            headers[[name]] = value;
        });

        var data = {
            type: 'swagger',
            data: {
                serviceUrl: apiServiceUrl,
                specUrl: specUrl,
                basePath: basePath,
            },
        };

        // Send the data using post
        $.ajax({
            type: 'POST',
            url: '/reqover/config/' + projectId,
            dataType: 'json',
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify(data),
            success: function (data) {
                window.location.href = '/reqover/swagger/report';
            },
            error: function (xhr, status, error) {
                $('#validationFeedback').text(xhr.responseJSON.error);
                $('#validationFeedback').show();
            },
        });
    });

    $('#grapqhQlForm').submit(function (event) {
        // Stop form from submitting normally
        event.preventDefault();

        // Get some values from elements on the page:
        var graphqlUrl = $('#graphqlUrl').val();

        var headers = {};
        $('.gh-headers').each(function () {
            var name = $(this).children('.name').val();
            var value = $(this).children('.value').val();
            if (name && value) {
                headers[[name]] = value;
            }
        });

        var data = {
            type: 'graphql',
            data: {
                graphqlUrl: graphqlUrl,
                headers: headers,
            },
        };

        // Send the data using post
        $.ajax({
            type: 'POST',
            url: '/reqover/graphql/config',
            dataType: 'json',
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify(data),
            success: function (data) {
                window.location.href = '/reqover/graphql/report';
            },
            error: function (xhr, status, error) {
                $('#validationFeedbackGQ').text(xhr.responseJSON.error);
                $('#validationFeedbackGQ').show();
            },
        });
    });
});
