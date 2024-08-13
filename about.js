function showContent(contentId) {
    const techStack = document.getElementById('tech-stack');
    const tools = document.getElementById('tools');
    const menuItems = document.querySelectorAll('.menu-item');

    if (contentId === 'tech-stack') {
        techStack.style.display = 'grid';
        tools.style.display = 'none';
    } else if (contentId === 'tools') {
        techStack.style.display = 'none';
        tools.style.display = 'grid';
    }

    menuItems.forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[onclick="showContent('${contentId}')"]`).classList.add('active');
}
