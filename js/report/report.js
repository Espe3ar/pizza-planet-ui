/**
 * Get all the report info 
 */
fetch("http://127.0.0.1:5000/report/")
    .then((response) => response.json())
    .then((report) => {
        // Format the revenue to 2 decimal places
        report.month_with_most_revenue.revenue = report.month_with_most_revenue.revenue.toFixed(2);
        let template = createReportTemplate(report);
        $("#report").append(template);
    });

/**
 * Find the template tag and populate it with the data
 * @param report
 */
function createReportTemplate(report) {
    let template = $("#report-template")[0].innerHTML;
    return Mustache.render(template, report);
}