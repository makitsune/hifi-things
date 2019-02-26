float getProceduralFragment(inout ProceduralFragment frag) {
	vec2 uv = _position.xy+0.5;
	uv.x *= 0.5; // left eye
	uv.x += cam_getStereoSide()*0.5; // right eye

	frag.emissive = texture(iChannel0, uv).rgb;
	frag.diffuse = vec3(0);
	frag.specular = vec3(0);
	frag.roughness = 1;
	return 0;
}