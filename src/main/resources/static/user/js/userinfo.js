layui.use(['form'], function () {
    let form = layui.form;//select、单选、复选等依赖form
});

/**
 * 提交保存
 */
function userFormSave() {
    $.post(ctx + "/user/updateUser", $("#userForm").serializeObject(), function (data) {
        layer.msg("修改成功！", {icon: 1, time: 2000}, function () {});
        $("#userForm").form(data.data);
    });
}