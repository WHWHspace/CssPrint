/**
 * Created by ybh on 2017/2/24.
 */
$(document).ready(function () {
    var removeListItem = function () {
        $(this).parent().remove();
    };

    var removeListProject = function () {
        $(this).parent().remove();
    };

    var removeListCompany = function () {
        $(this).parent().remove();
    };

    var addListItem = function () {
        $(this).before('' +
            '<li>'+
            '<input class="list-input" placeholder="信息："/>'+
            '<button class="delete-list-item">x</button>'+
            '</li>');
        $(".delete-list-item").on("click",removeListItem);
    };

    var addListProject = function () {
        $(this).before('' +
            '<div>'+
            '<input class="list-input title-2" value="XXX项目">'+
            '<button class="delete-list-project">x</button>'+
            '<div contenteditable="true">工作描述</div>'+
            '</div>');
        $(".delete-list-project").on("click",removeListProject);
    };

    var addListCompany = function () {
        $(this).before('' +
            '<div>'+
            '<input class="list-input title-1" value="XXX公司 （ 2012年9月 ~ 2014年9月 ）">'+
            '<button class="delete-list-company">x</button>'+
            '<div>'+
            '<input class="list-input title-2" value="XXX项目">'+
            '<button class="delete-list-project">x</button>'+
            '<div contenteditable="true">工作描述</div>'+
            '</div>'+
            '<button class="add-list-project">添加项目</button>' +
            '<hr>'+
            '</div>');
        $(".delete-list-company").on("click",removeListCompany);
        $(".delete-list-project").on("click",removeListProject);
        $(".add-list-project").on("click",addListProject);
    };

    $(".delete-list-item").on("click",removeListItem);

    $(".delete-list-project").on("click",removeListProject);

    $(".delete-list-company").on("click",removeListCompany);

    $(".add-list-item").on("click",addListItem);

    $(".add-list-project").on("click",addListProject);

    $(".add-list-company").on("click",addListCompany);

});