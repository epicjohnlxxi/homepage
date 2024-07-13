function openPage(pageUrl)
{
    if (pageUrl == null)
    {
        pageUrl = '404.html';
    }

    window.location.href = pageUrl;
}