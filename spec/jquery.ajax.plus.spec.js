describe("Added jQuery.ajax methods", function() {
  var dataType = "json";
  var onSuccess = function (data, textStatus, jqXHR){};

  describe("$.put", function() {
    it("should call ajax with type PUT", function() {
      spyOn(jQuery, "ajax");
      jQuery.put("/resource", { attribute_name: "attribute_value" }, onSuccess, dataType);
      expect(jQuery.ajax).toHaveBeenCalledWith({
        url : '/resource',
        type : 'put',
        dataType : dataType,
        data : { attribute_name : 'attribute_value' },
        success : onSuccess
      });
    });
  });

  describe("$.delete", function() {
    it("should call ajax with type DELETE", function() {
      spyOn(jQuery, "ajax");
      jQuery.delete("/resource", { attribute_name: "attribute_value" }, onSuccess, dataType);
      expect(jQuery.ajax).toHaveBeenCalledWith({
        url : '/resource',
        type : 'delete',
        dataType : dataType,
        data : { attribute_name : 'attribute_value' },
        success : onSuccess
      });
    });
  });

  describe("$.patch", function() {
    it("should call ajax with type PATCH", function() {
      spyOn(jQuery, "ajax");
      jQuery.patch("/resource", { attribute_name: "attribute_value" }, onSuccess, dataType);
      expect(jQuery.ajax).toHaveBeenCalledWith({
        url : '/resource',
        type : 'patch',
        dataType : dataType,
        data : { attribute_name : 'attribute_value' },
        success : onSuccess
      });
    });
  });

});
