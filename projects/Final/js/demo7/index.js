// 'preloadImages' is a utility function that handles the preloading of images to ensure they are fully loaded before being used.
import { preloadImages } from '../utils.js';
// 'ImageTrail' is a class designed to manage and animate a sequence of images, reacting to mouse movements.
import { ImageTrail } from './imageTrail.js';

const imagesData = {
    'Spiral Galaxies (S)': [
        '1.jpg', '3.jpg', '4.jpg', '5.jpg', 
        '6.jpg', '7.jpg', '8.jpg', '12.jpg', 
        '13.jpg', '16.jpg', '17.jpg', '21.jpg', 
        '24.jpg', '28.jpg', '29.jpg', '32.jpg', 
        '37.jpg', '39.jpg', '40.jpg', '43.jpg', 
        '45.jpg', '47.jpg', '51.jpg', '56.jpg', 
        '61.jpg', '69.jpg', '80.jpg', '81.jpg', 
        '83.jpg', '86.jpg', '90.jpg', '92.jpg', 
        '96.jpg', '100.jpg'],

    'Barred Spiral Galaxies (SB)': [
        '2.jpg', '9.jpg', '10.jpg', '11.jpg',
        '15.jpg', '25.jpg', '31.jpg', '35.jpg',
        '42.jpg', '46.jpg', '48.jpg', '50.jpg',
        '54.jpg', '67.jpg', '68.jpg', '70.jpg',
        '71.jpg', '72.jpg', '77.jpg', '79.jpg',
        '82.jpg', '93.jpg', '95.jpg', '97.jpg',],

    'Interacting/Merging Galaxies': [
        '26.jpg', '41.jpg', '44.jpg', '53.jpg',
        '55.jpg', '94.jpg', '98.jpg', '99.jpg'],

    'Lenticular Galaxies (S0)': [
        '20.jpg', '30.jpg', '52.jpg', '58.jpg',
        '59.jpg', '66.jpg', '73.jpg', '74.jpg',
        '78.jpg', '84.jpg', '87.jpg', '88.jpg'],

    'Irregular Galaxies (Irr)': [
        '26.jpg', '41.jpg', '44.jpg', '53.jpg',
        '55.jpg', '94.jpg', '98.jpg', '99.jpg'],

    'Elliptical Galaxies (E)': [
        '34.jpg', '36.jpg', '57.jpg', '60.jpg',
        '62.jpg', '63.jpg', '64.jpg', '65.jpg',
        '75.jpg', '76.jpg', '85.jpg', '89.jpg',
        '91.jpg'],
    
    'Local Group': [
        '1.jpg', '6.jpg', '37.jpg', '51.jpg',
        '96.jpg', '97.jpg', '98.jpg', '99.jpg',
        '100.jpg'],

    'Fornax Cluster': [
        '2.jpg', '57.jpg', '58.jpg', '59.jpg', '85.jpg'],

    'Sculptor Group': [
        '3.jpg', '7.jpg', '79.jpg', '80.jpg', 
        '81.jpg', '82.jpg', '83.jpg', '93.jpg', 
        '94.jpg', '95.jpg'],

    'Coma I Cluster': [
        '5.jpg', '50.jpg', '68.jpg', '69.jpg',
        '70.jpg', '71.jpg'],

    'M81 Group': [
        '8.jpg', '26.jpg', '41.jpg', '52.jpg', '53.jpg'],

    'Ursa Major Cluster': [
        '4.jpg', '10.jpg', '32.jpg', '39.jpg',
        '64.jpg', '65.jpg', '66.jpg'],

    'Dorado Group': [
        '11.jpg', '13.jpg', '75.jpg', '76.jpg', 
        '77.jpg', '78.jpg'],

    'Canes Venatici Group': [
        '12.jpg', '43.jpg', '45.jpg', '47.jpg', 
        '54.jpg', '55.jpg', '56.jpg'],

    'Field Galaxy': [
        '9.jpg', '14.jpg', '16.jpg', '17.jpg',
        '18.jpg', '20.jpg', '22.jpg', '23.jpg',
        '25.jpg', '27.jpg', '28.jpg', '31.jpg',
        '33.jpg', '34.jpg', '35.jpg', '42.jpg',
        '44.jpg', '48.jpg'],

    'Centaurus Group': [
        '15.jpg', '36.jpg', '46.jpg', '72.jpg', 
        '73.jpg', '74.jpg'],


    'Virgo Cluster': [
        '29.jpg', '30.jpg', '40.jpg', '62.jpg', 
        '63.jpg', '67.jpg'],

    'Hercules Galaxy Cluster': [
        '19.jpg', '21.jpg', '38.jpg', '49.jpg', 
        '60.jpg', '91.jpg'],

    'Perseus Cluster': [
        '86.jpg', '87.jpg', '88.jpg', '89.jpg', 
        '90.jpg'],

    'Antlia Cluster': [
        '24.jpg', '61.jpg', '84.jpg', '92.jpg'],

    'Quiescent Galaxy': [
        '1.jpg', '5.jpg', '6.jpg', '9.jpg',
        '20.jpg', '30.jpg', '37.jpg', '42.jpg',
        '43.jpg', '51.jpg', '65.jpg', '69.jpg',
        '76.jpg', '78.jpg', '80.jpg', '84.jpg',
        '85.jpg', '87.jpg', '96.jpg', '97.jpg',
        '100.jpg'],

    'Active Galaxy': [
        '2.jpg', '17.jpg', '18.jpg', '29.jpg',
        '31.jpg', '33.jpg', '34.jpg', '45.jpg',
        '46.jpg', '52.jpg', '59.jpg', '60.jpg',
        '62.jpg', '66.jpg', '67.jpg', '68.jpg',
        '82.jpg', '86.jpg', '89.jpg', '90.jpg',
        '93.jpg', '94.jpg'],

    'Star-forming Galaxy': [
        '3.jpg', '4.jpg', '7.jpg', '8.jpg', 
        '11.jpg', '12.jpg', '13.jpg', '15.jpg',
        '16.jpg', '21.jpg', '25.jpg', '32.jpg', 
        '39.jpg', '40.jpg', '48.jpg', '54.jpg', 
        '56.jpg', '58.jpg', '63.jpg', '70.jpg', 
        '72.jpg', '74.jpg', '81.jpg', '83.jpg', 
        '92.jpg', '98.jpg', '99.jpg'],

    'Starburst Galaxy': [
        '3.jpg', '4.jpg', '7.jpg', '8.jpg', 
        '11.jpg', '12.jpg', '13.jpg', '15.jpg',
        '16.jpg', '21.jpg', '25.jpg', '32.jpg', 
        '39.jpg', '40.jpg', '48.jpg', '54.jpg', 
        '56.jpg', '58.jpg', '63.jpg', '70.jpg', 
        '72.jpg', '74.jpg', '81.jpg', '83.jpg', 
        '92.jpg', '98.jpg', '99.jpg'],

    'LINER': [
        '28.jpg', '36.jpg', '47.jpg', '50.jpg', 
        '57.jpg', '61.jpg', '71.jpg', '73.jpg', 
        '77.jpg', '88.jpg'],

}

// 获取所有select元素
const selects = document.querySelectorAll('.demos select');

function updateContent(selectedValue) {
    let html = ''
    imagesData[selectedValue].forEach(item => {
        html += `
            <div class="content__img">
                <div class="content__img-inner" style="background-image:url(images/${item})"></div>
            </div>
        `
    });
    document.querySelector('.content').innerHTML = html;
}

// 页面加载时检查本地存储
function checkLocalStorage() {
    const savedValue = localStorage.getItem('selectedImages');
    if (savedValue) {
        // 更新内容
        updateContent(savedValue);
        
        // 恢复所有select的状态
        selects.forEach((select, index) => {
            const selectValue = localStorage.getItem(`select_${index}`);
            if (selectValue !== null) {
                select.value = selectValue;
            }
        });
    }
}

function init() {
    // 检查本地存储
    checkLocalStorage();
    
    preloadImages('.content__img-inner').then(() => {
        document.body.classList.remove('loading');
        new ImageTrail(document.querySelector('.content'));
    });
}

// 为每个select添加change事件监听
selects.forEach((currentSelect, index) => {
    currentSelect.addEventListener('change', function(e) {
        const selectedValue = this.value;
        
        if(selectedValue) {
            // 保存选择到本地存储
            localStorage.setItem('selectedImages', selectedValue);
            
            // 重置其他select为空选项并保存状态
            selects.forEach((otherSelect, otherIndex) => {
                if(otherIndex !== index) {
                    // 确保有空选项
                    if(!otherSelect.querySelector('option[value=""]')) {
                        const emptyOption = document.createElement('option');
                        emptyOption.value = "";
                        emptyOption.text = "请选择";
                        otherSelect.insertBefore(emptyOption, otherSelect.firstChild);
                    }
                    // 设置为空选项
                    otherSelect.value = "";
                    // 保存其他select的空状态
                    localStorage.setItem(`select_${otherIndex}`, "");
                }
            });
            
            // 保存当前select的状态
            localStorage.setItem(`select_${index}`, selectedValue);
            
            // 刷新页面
            window.location.reload();
        }
    });
});

// 初始化执行
init();