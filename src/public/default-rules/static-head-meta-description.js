function(page, done) {
    var dom = page.getStaticDom();
    const what = 'static';
    //if (some requirement)
    var meta_ds = dom.querySelectorAll('meta[name="description"]');
    if (meta_ds.length > 0) {
        if (meta_ds > 1) {
            return this.createResult('HEAD', 'Multiple meta description found.' + this.partialCodeLink(meta_ds), 'error', what);
        }
        //some category of stuff your are testing i.e.: 'DOM', 'HEAD', 'BODY', 'HTTP', 'SPEED', ...
        var lable = 'HEAD';
        var msg = 'Meta description: ' + meta_ds[0]['content'];
        msg = msg + this.partialCodeLink(meta_ds);
        //you can create a link showing only the partial code of a nodeList
        //msg = msg+' '+this.partialCodeLink(dom);
        var type = 'info'; //should be 'info', 'warning', 'error'
        done(this.createResult(lable, msg, type, what));
    }
    done(this.createResult('BODY', 'No meta description found.', 'error', what));
}