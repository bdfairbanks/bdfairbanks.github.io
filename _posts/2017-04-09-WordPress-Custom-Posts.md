---
title:  "Custom Posts in WordPress"
---

<p class="article_para">
Creating a custom post in word press is pretty easy.  Once you've created the custom post type just go into the admin section and click the create new button.  With that dad joke out of the way creating a custom post class is no difficult feat either.
</p>

<p class="article_para">
Probably the easiest way to create a custom post type is by simply adding a plugin to your WordPress site.  This option works, but there are downsides to that, namely the need for a plugin that you do not control, i.e. can be taken off the market, stop updating, or any other variety of terrible things.  So to avoid that it is best to build your own custom classes.
</p>

<p class="article_para">
 The first step to this is to download WordPress.  This may seem like something that should not even be mentioned, but WordPress sites can also be created through an online portal.  This denies us the opertunity to muddle around in the files, as we will need to to create a custom class. <a href="http://www.wpbeginner.com/how-to-install-wordpress/" target="_blank">Downloading WordPress</a> requires very little in terms of effort, and <a href="https://www.taniarascia.com/developing-a-wordpress-theme-from-scratch/" target="_blank"> creating a custom wordpress theme</a> is not hard either.  Creating a custom theme is neccisary because the templates that come pre-installed on WordPress are loaded with functions and files that we may not want.  Thus creating a new theme.
</p>

<p class="article_para">
With the set up out of the way we can get to the crux of this tutorial.  Head on over to the custom theme folder you just created.  Open up functions.php in your prefered text editor.  Copy and enter the text in the gist below.
</p>

<script src="https://gist.github.com/bdfairbanks/2e010a61815a8afb43e46117a15c1eb5.js"></script>

<p class="article_para">
Rename the function and the post type names and hit save.  A new custom post class given the name and the paramaters that you have set will appear in the admin dashboard of your wordpress project. There are <a href="https://codex.wordpress.org/Function_Reference/register_post_type" target="blank"> many different labels that you can add to your custom post.  The custom post will iteract with the rest of WordPress in much the same way as any other inharent part of the program, so using it alongside plugins is not a problem.  You should now be ready to charge headfirst into the brave world of custom post types.
</p>